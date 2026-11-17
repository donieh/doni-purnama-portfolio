$browse = Join-Path $env:USERPROFILE ".local\bin\browse.exe"
$expr = @'
async () => {
  for (let k = 0; k < 60; k++) {
    const i = Array.from(document.querySelectorAll('img'))
      .find(x => x.naturalWidth >= 700 && /t51\.(82787|2885)-15/.test(x.currentSrc));
    if (i) return { w: i.naturalWidth, h: i.naturalHeight, src: i.currentSrc };
    await new Promise(r => setTimeout(r, 150));
  }
  return null;
}
'@
$meta = Get-Content -Raw "tools/posts-meta.json" | ConvertFrom-Json
$results = @()
foreach ($item in $meta) {
  $nav = & $browse navigate $item.url 2>$null | Out-String | ConvertFrom-Json
  $tab = $nav.tab
  $img = & $browse eval --tab $tab --expression $expr 2>$null | Out-String | ConvertFrom-Json
  $results += [pscustomobject]@{ brand=$item.brand; index=$item.index; kind=$item.kind; url=$item.url; w=$img.w; h=$img.h; src=$img.src }
  Write-Output ("{0} {1} {2} -> {3}x{4}" -f $item.brand, $item.index, $item.kind, $img.w, $img.h)
  & $browse tabs close --tab $tab 2>$null | Out-Null
}
$results | ConvertTo-Json -Depth 4 | Set-Content "tools/posts-native.json" -Encoding UTF8
Write-Output "saved 28"
