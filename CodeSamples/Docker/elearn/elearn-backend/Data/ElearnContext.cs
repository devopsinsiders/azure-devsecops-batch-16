using Microsoft.EntityFrameworkCore;
using ElearnBackend.Models;

namespace ElearnBackend.Data
{
    public class ElearnContext : DbContext
    {
        public ElearnContext(DbContextOptions<ElearnContext> options) : base(options) { }

        public DbSet<Course> Courses { get; set; }
    }
}
