using ATS.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace ATS.Infra.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Students> Students { get; set; }

        public DbSet<Courses> Courses { get; set; }

        public DbSet<Evaluations> Evaluations { get; set; }

        public DbSet<CourseStudents> CourseStudents { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Evaluations>().Ignore(t => t.CourseStudent);
            modelBuilder.Entity<CourseStudents>().Ignore(t => t.Course);
        }
    }
}