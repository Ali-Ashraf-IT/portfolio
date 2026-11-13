# Prints the /cv page to public/Ashraf_CV.pdf using Microsoft Edge (Windows).
# Steps: npm run build ; npm run preview (in another terminal) ; npm run cv:pdf ; npm run build
param([string]$Url = 'http://localhost:4321/portfolio/cv/')
$root = Split-Path -Parent $PSScriptRoot
$edge = @("${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe", "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe") | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { Write-Error 'Microsoft Edge not found.'; exit 1 }
$out = Join-Path $root 'public\Ashraf_CV.pdf'
& $edge --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=4000 "--print-to-pdf=$out" $Url | Out-Null
Write-Output "Saved $out"
