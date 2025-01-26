$excelFilePath = ".\rgs.xlsx"
$rgsData = Import-Excel -Path $excelFilePath
# Write-Host $rgsData

New-Item -Path ".\terraform.tfvars" -ItemType "file" -Force
Add-Content ".\terraform.tfvars" "rgs = {"

ForEach ($randhir in $rgsData) {
    Add-Content ".\terraform.tfvars" "$($randhir.rg_name) = `"$($randhir.rg_location)`""
}
Add-Content ".\terraform.tfvars" "}"
