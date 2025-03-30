using Microsoft.AspNetCore.Mvc;
using ElearnBackend.Data;
using ElearnBackend.Models;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class CourseController : ControllerBase
{
    private readonly ElearnContext _context;

    public CourseController(ElearnContext context)
    {
        _context = context;
    }

    // Get All Courses
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
    {
        return await _context.Courses.ToListAsync();
    }

    // Get Course by ID
    [HttpGet("{id}")]
    public async Task<ActionResult<Course>> GetCourse(int id)
    {
        var course = await _context.Courses.FindAsync(id);
        if (course == null) return NotFound();
        return course;
    }

    // Create a Course
    [HttpPost]
    public async Task<ActionResult<Course>> PostCourse(Course course)
    {
        _context.Courses.Add(course);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetCourse), new { id = course.CourseId }, course);
    }

    // Update a Course
    [HttpPut("{id}")]
    public async Task<IActionResult> PutCourse(int id, Course course)
    {
        if (id != course.CourseId) return BadRequest();
        _context.Entry(course).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    // Delete a Course
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCourse(int id)
    {
        var course = await _context.Courses.FindAsync(id);
        if (course == null) return NotFound();
        _context.Courses.Remove(course);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}

