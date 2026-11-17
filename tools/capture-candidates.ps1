$browse = Join-Path $env:USERPROFILE ".local\bin\browse.exe"
$targets = @(
  @{ id="DaLLecQReRW"; url="https://www.instagram.com/reel/DaLLecQReRW/" },
  @{ id="Det-DH5uR8q"; url="https://www.instagram.com/reel/Det-DH5uR8q/" },
  @{ id="DeYyELCvJHh"; url="https://www.instagram.com/reel/DeYyELCvJHh/" },
  @{ id="DUxWRo-D7Lp"; url="https://www.instagram.com/reel/DUxWRo-D7Lp/" },
  @{ id="DWa8Dw_EhLR"; url="https://www.instagram.com/reel/DWa8Dw_EhLR/" },
  @{ id="DaRvP30yWvC"; url="https://www.instagram.com/reel/DaRvP30yWvC/" },
  @{ id="DctDdmzSOQU"; url="https://www.instagram.com/reel/DctDdmzSOQU/" },
  @{ id="DYHMs8OyOPj"; url="https://www.instagram.com/reel/DYHMs8OyOPj/" },
  @{ id="DY6Nvt7yqUh"; url="https://www.instagram.com/reel/DY6Nvt7yqUh/" },
  @{ id="Dbvd_6wSj9p"; url="https://www.instagram.com/p/Dbvd_6wSj9p/" },
  @{ id="DfJnPOdRYwI"; url="https://www.instagram.com/reel/DfJnPOdRYwI/" },
  @{ id="DW0GMixBDAG"; url="https://www.instagram.com/p/DW0GMixBDAG/" },
  @{ id="DQBZbekACpr"; url="https://www.instagram.com/reel/DQBZbekACpr/" },
  @{ id="DU43-QNEgl-"; url="https://www.instagram.com/reel/DU43-QNEgl-/" }
)
$results = @()
foreach ($t in $targets) {
  $nav = & $browse navigate $t.url 2>$null | Out-String | ConvertFrom-Json
  $tab = $nav.tab
  & $browse network $tab start --urlFilter ".mp4" 2>$null | Out-Null
  & $browse navigate --tab $tab --url $t.url 2>$null | Out-Null
  & $browse eval --tab $tab --expression "(() => new Promise(r => setTimeout(() => r(1), 3000)))()" 2>$null | Out-Null
  $cap = & $browse network $tab stop 2>$null | Out-String | ConvertFrom-Json
  $seen = [ordered]@{}
  foreach ($ex in $cap.exchanges) {
    $u = $ex.request.url
    if ($u -like "*.mp4*") {
      $end = 0
      if ($u -match 'byteend=(\d+)') { $end = [int]$Matches[1] }
      $clean = $u -replace '&bytestart=\d+&byteend=\d+', ''
      if (-not $seen.Contains($clean)) { $seen[$clean] = $end }
      elseif ($end -gt $seen[$clean]) { $seen[$clean] = $end }
    }
  }
  $urls = @($seen.Keys)
  $results += [pscustomobject]@{ id=$t.id; url=$t.url; candidates=$urls }
  Write-Output ("{0}: {1} candidates" -f $t.id, $urls.Count)
  & $browse tabs close --tab $tab 2>$null | Out-Null
}
$results | ConvertTo-Json -Depth 4 | Set-Content "tools/video-candidates.json" -Encoding UTF8
Write-Output "saved"
