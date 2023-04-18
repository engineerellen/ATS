using System.ComponentModel.DataAnnotations.Schema;

namespace ATS.Domain.Models
{
    public class Evaluations : BaseEntity
    {
        [NotMapped]
        public CourseStudents? CourseStudent { get; set; }

        public Guid? course_student_id { get; set; }

        public int? stars { get; set; }

        public string? description { get; set; }

        public DateTime? creation_date { get; set; }
    }
}