$files = @("drinks.html", "dishes.html")

foreach ($file in $files) {
    $content = Get-Content $file -Raw -Encoding UTF8
    $content = $content -replace ' data-price="[^"]*"', ''
    $content = $content -replace ' data-i18n="[^"]*"', ''
    Set-Content $file -Value $content -NoNewline -Encoding UTF8
}
