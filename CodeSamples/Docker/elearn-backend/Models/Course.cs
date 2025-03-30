using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json;

namespace ElearnBackend.Models
{
    public class Course
    {
        [Key]
        public int CourseId { get; set; }
        
        [Required]
        public string CourseName { get; set; } = string.Empty;
        
        [Required]
        public string InstructorName { get; set; } = string.Empty;
        
        [Column(TypeName = "json")]
        public List<string> Lessons { get; set; } = new List<string>();   // JSON Array of lessons
    }
}
