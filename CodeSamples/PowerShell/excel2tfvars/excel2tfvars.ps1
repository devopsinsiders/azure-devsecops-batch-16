# Ensure you have the required module to read Excel files
# Install-Module -Name ImportExcel -Force -SkipPublisherCheck -Scope CurrentUser

# Define the path to your input Excel file and output Terraform file
$excelFilePath = ".\rgs.xlsx"
$terraformFilePath = ".\terraform.tfvars"

# Import the Excel file using ImportExcel module
$rgsData = Import-Excel -Path $excelFilePath

# Open the output Terraform file for writing
$tfVarsContent = @"
rgs = {
"@

# Loop through each row in the Excel file and build the Terraform variable content
foreach ($row in $rgsData) {
    $rgName = $row.rg_name
    $rgLocation = $row.rg_location

    $tfVarsContent += "  $rgName = `"$rgLocation`""
    $tfVarsContent += "`n"
}

# Close the block
$tfVarsContent += "}"

# Write the content to the Terraform tfvars file
$tfVarsContent | Out-File -FilePath $terraformFilePath

Write-Host "terraform.tfvars file has been created successfully!"
