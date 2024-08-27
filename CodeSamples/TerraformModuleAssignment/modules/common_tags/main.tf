variable "colour" {}
variable "dept" {}

locals {
  common_tags = {
    department = var.dept
    colour     = var.colour
  }
}

output "tags" {
  value = local.common_tags
}
