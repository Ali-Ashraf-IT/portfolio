# Regenerates public/og.png from scripts/og.html using Microsoft Edge (Windows).
$root = Split-Path -Parent $PSScriptRoot
$edge = @("${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe", "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe") | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { Write-Error 'Microsoft Edge not found.'; exit 1 }
$src = 'file:///' + ($root -replace '\\', '/') + '/scripts/og.html'
& $edge --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=3000 "--screenshot=$root\public\og.png" $src | Out-Null
Write-Output "Saved public/og.png"
