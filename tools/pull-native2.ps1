$browse = Join-Path $env:USERPROFILE ".local\bin\browse.exe"
$expr = @'
async () => {
  for (let k = 0; k < 60; k++) {
    const imgs = Array.from(document.querySelectorAll('img'))
      .filter(x => x.naturalWidth >= 700 && /t51\.(82787|2885)-15/.test(x.currentSrc))
      .slice(0, 8)
      .map(x => ({ w: x.naturalWidth, h: x.naturalHeight, alt: x.alt || '', src: x.currentSrc }));
    if (imgs.length) return imgs;
    await new Promise(r => setTimeout(r, 150));
  }
  return [];
}
'@

$meta = Get-Content -Raw "tools/posts-meta.json" | ConvertFrom-Json
$results = @()

foreach ($item in $meta) {
  $nav = & $browse navigate $item.url 2>$null | Out-String | ConvertFrom-Json
  $tab = $nav.tab
  $imgs = & $browse eval --tab $tab --expression $expr 2>$null | Out-String | ConvertFrom-Json
  $pick = $imgs[0]
  if ($item.url -match 'img_index=(\d+)') {
    $idx = [int]$Matches[1]
    $group = @($imgs | Where-Object { $_.alt -eq '' -and $_.w -eq $imgs[0].w -and $_.h -eq $imgs[0].h })
    if ($group.Count -ge $idx) { $pick = $group[$idx - 1] }
    elseif ($group.Count -gt 0) { $pick = $group[$group.Count - 1] }
  }
  $results += [pscustomobject]@{
    brand = $item.brand; index = $item.index; url = $item.url; kind = $item.kind
    w = $pick.w; h = $pick.h; src = $pick.src
  }
  Write-Output ("{0} {1} -> {2}x{3}" -f $item.brand, $item.index, $pick.w, $pick.h)
  & $browse tabs close --tab $tab 2>$null | Out-Null
}

$results | ConvertTo-Json -Depth 4 | Set-Content "tools/posts-native.json" -Encoding UTF8
Write-Output "saved"
