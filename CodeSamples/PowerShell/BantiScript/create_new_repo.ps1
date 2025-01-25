$repo_name = Read-Host -Prompt 'Enter the name of the repository you want to create'

Get-Content token.txt | az devops login --organization https://dev.azure.com/genzelectric/
az repos create --name $repo_name -p zelectric > output.json

$json = Get-Content output.json | ConvertFrom-Json
$remoteUrl = $json.remoteUrl
Write-Output $remoteUrl

Remove-Item output.json

./terraform_repo_automation.ps1

git clone $remoteUrl
Copy-Item -Path "./terraform_code/*" -Destination "./$repo_name" -Recurse
cd $repo_name

git add .
git commit -m "Initial commit"
git push 

cd ..
Remove-Item -Path "./$repo_name" -Recurse
Remove-Item -Path "./terraform_code" -Recurse

