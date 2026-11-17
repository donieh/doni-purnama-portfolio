$browse = Join-Path $env:USERPROFILE ".local\bin\browse.exe"
$data = Get-Content -Raw "tools/final-posts.json" | ConvertFrom-Json
$results = @()

foreach ($brand in $data.brands) {
  for ($j = 0; $j -lt $brand.items.Count; $j++) {
    $item = $brand.items[$j]
    $kind = if ($item.labelOverride) { $item.labelOverride } else { $item.kind }
    if ($kind -ne "reel") { continue }

    $nav = & $browse navigate $item.url 2>$null | Out-String | ConvertFrom-Json
    $tab = $nav.tab
    & $browse network $tab start --urlFilter ".mp4" 2>$null | Out-Null
    & $browse navigate --tab $tab --url $item.url 2>$null | Out-Null
    & $browse eval --tab $tab --expression "(() => new Promise(r => setTimeout(() => r(1), 2200)))()" 2>$null | Out-Null
    $cap = & $browse network $tab stop 2>$null | Out-String | ConvertFrom-Json

    # Use the FIRST distinct mp4 on the page (the post itself), not the largest one (often a recommendation)
    $best = $null; $bestEnd = -1; $base = $null
    foreach ($ex in $cap.exchanges) {
      $u = $ex.request.url
      if ($u -notlike "*.mp4*") { continue }
      $b = $u.Split('?')[0]
      if (-not $base) { $base = $b }
      if ($b -eq $base -and $u -match 'byteend=(\d+)') {
        $e = [int]$Matches[1]
        if (-not $best -or $e -gt $bestEnd) { $bestEnd = $e; $best = $u }
      }
    }
    if ($best) {
      $best = $best -replace '&bytestart=\d+&byteend=\d+', ''
      $results += [pscustomobject]@{ brand=$brand.slug; index=($j+1); url=$best; bytes=$bestEnd }
      Write-Output ("VIDEO {0} {1} -> {2} bytes" -f $brand.slug, ($j+1), $bestEnd)
    } else {
      Write-Output ("NO VIDEO {0} {1}" -f $brand.slug, ($j+1))
    }
    & $browse tabs close --tab $tab 2>$null | Out-Null
  }
}
$results | ConvertTo-Json -Depth 3 | Set-Content "tools/videos.json" -Encoding UTF8
Write-Output "saved tools/videos.json"
