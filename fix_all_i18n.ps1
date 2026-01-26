$files = @('drinks.html', 'dishes.html')

foreach ($file in $files) {
    $content = Get-Content $file -Raw -Encoding UTF8
    
    # Fix h4 tags: <h4key"> -> <h4 data-i18n="key">
    $content = $content -replace '<h4([a-z0-9\s-]+)">', '<h4 data-i18n="$1">'
    
    # Fix h3 tags: <h3key"> -> <h3 data-i18n="key">
    $content = $content -replace '<h3([a-z0-9\s-]+)">', '<h3 data-i18n="$1">'
    
    # Fix div tags: <div class="menu-item-description"key"> -> <div class="menu-item-description" data-i18n="key">
    $content = $content -replace '(<div class="menu-item-description")([a-z0-9\s-]+)">', '$1 data-i18n="$2">'
    
    Set-Content $file -Value $content -Encoding UTF8 -NoNewline
}

Write-Host "Fixed all data-i18n attributes!"
