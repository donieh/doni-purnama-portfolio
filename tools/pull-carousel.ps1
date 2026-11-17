$browse = Join-Path $env:USERPROFILE ".local\bin\browse.exe"
$expr = @'
(() => { const i = Array.from(document.querySelectorAll('img')).find(x => x.naturalWidth >= 700 && /t51\.82787-15/.test(x.currentSrc)); return i ? { w: i.naturalWidth, h: i.naturalHeight, src: i.currentSrc } : null; })()
'@
$meta = Get-Content -Raw "tools/posts-meta.json" | ConvertFrom-Json
$out = @()
foreach ($item in $meta) {
  if ($item.url -notmatch 'img_index=(\d+)') { continue }
  $idx = [int]$Matches[1]
  if ($idx -le 1) { continue }
  $nav = & $browse navigate $item.url 2>$null | Out-String | ConvertFrom-Json
  $tab = $nav.tab
  for ($k = 1; $k -lt $idx; $k++) { & $browse press --tab $tab --key ArrowRight 2>$null | Out-Null }
  $img = & $browse eval --tab $tab --expression $expr 2>$null | Out-String | ConvertFrom-Json
  $out += [pscustomobject]@{ brand=$item.brand; index=$item.index; w=$img.w; h=$img.h; src=$img.src }
  Write-Output ("{0} {1} -> {2}x{3}" -f $item.brand, $item.index, $img.w, $img.h)
  & $browse tabs close --tab $tab 2>$null | Out-Null
}
$out | ConvertTo-Json -Depth 3 | Set-Content "tools/carousel-fix.json" -Encoding UTF8
