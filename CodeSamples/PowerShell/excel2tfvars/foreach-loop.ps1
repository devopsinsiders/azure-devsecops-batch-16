# Create an array of 5 numbers
$numbers = 56, 25, 43, 46, 55, 67, 77

ForEach ($number in $numbers) {
    $number = $number + 10
    Write-Host "Number is $number"
}