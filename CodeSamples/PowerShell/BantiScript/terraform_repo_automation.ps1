$baseDir = "terraform_code"
$environments = @("dev", "qa", "prod")
$modules = @("resource_group", "storage_account")
$files = @("main.tf", "variables.tf", "provider.tf", "terraform.tfvars")
$moduleFiles = @("main.tf", "variables.tf", "output.tf")

New-Item -Path "." -Name $baseDir -ItemType Directory
New-Item -Path "./$baseDir" -Name "environments" -ItemType Directory
New-Item -Path "./$baseDir" -Name "modules" -ItemType Directory

foreach ($env in $environments) {
    New-Item -Path "./$baseDir/environments" -Name $env -ItemType Directory
    foreach ($file in $files) {
        New-Item -Path "./$baseDir/environments/$env" -Name $file -ItemType File
    }
}

foreach ($module in $modules) {
    New-Item -Path "./$baseDir/modules" -Name $module -ItemType Directory
    foreach ($file in $moduleFiles) {
        New-Item -Path "./$baseDir/modules/$module" -Name $file -ItemType File
    }
}
