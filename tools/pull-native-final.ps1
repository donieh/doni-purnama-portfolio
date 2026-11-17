$browse = Join-Path $env:USERPROFILE ".local\bin\browse.exe"
$data = Get-Content -Raw "tools/final-posts.json" | ConvertFrom-Json
$results = @()

$exprTemplate = @'
(() => {
  const f = '__FILE__';
  const imgs = Array.from(document.querySelectorAll('img')).filter(x => x.naturalWidth >= 400);
  const m = imgs.find(x => x.currentSrc.includes(f)) || imgs.find(x => /t51\.(82787|2885)-15/.test(x.currentSrc));
  return m ? { w: m.naturalWidth, h: m.naturalHeight, src: m.currentSrc, exact: m.currentSrc.includes(f) } : null;
})()
'@

foreach ($brand in $data.brands) {
  for ($j = 0; $j -lt $brand.items.Count; $j++) {
    $item = $brand.items[$j]
    $file = ""
    try {
      $html = (Invoke-WebRequest -Uri $item.url -UseBasicParsing -Headers @{ "User-Agent" = "Mozilla/5.0" }).Content
      $ogUrl = ([regex]::Match($html, '<meta property="og:image" content="([^"]+)"')).Groups[1].Value -replace '&amp;', '&'
      $file = ([regex]::Match($ogUrl, '/([^/\?]+\.(?:jpg|webp))')).Groups[1].Value
    } catch {}

    $nav = & $browse navigate $item.url 2>$null | Out-String | ConvertFrom-Json
    $tab = $nav.tab
    & $browse eval --tab $tab --expression "(() => new Promise(r => setTimeout(() => r(1), 2500)))()" 2>$null | Out-Null
    $expr = $exprTemplate.Replace("__FILE__", $file)
    $raw = & $browse eval --tab $tab --expression $expr 2>$null | Out-String
    try { $img = $raw | ConvertFrom-Json } catch { $img = $null }
    $results += [pscustomobject]@{ brand=$brand.slug; index=($j+1); w=$img.w; h=$img.h; src=$img.src; exact=$img.exact; ogfile=$file }
    Write-Output ("{0} {1} -> {2}x{3} exact={4}" -f $brand.slug, ($j+1), $img.w, $img.h, $img.exact)
    & $browse tabs close --tab $tab 2>$null | Out-Null
  }
}
$results | ConvertTo-Json -Depth 4 | Set-Content "tools/posts-native.json" -Encoding UTF8
Write-Output "saved"
