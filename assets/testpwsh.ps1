# comment
# {{argment_placeholder}}

$logfile = $env:HOMEDRIVE + "/testext.log"
$message = "log: vscode ext test at $(Get-Date)"
Write-Host $message >> $logfile
