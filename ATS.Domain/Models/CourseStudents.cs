using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ATS.Domain.Models
{
    public class CourseStudents : BaseEntity
    {
        private Courses _course;

      [NotMapped]
        public Courses Course
        {
            get
            {
                _course = _course == null ? new Courses() : _course;
                return _course;
            }
            set
            {
                _course = value;
            }
        }

        public Guid? student_id { get; set; }
        public Guid? course_id { get; set; }
        public int? grade { get; set; }
    }
}