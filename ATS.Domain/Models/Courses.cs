namespace ATS.Domain.Models
{
    public class Courses : BaseEntity
    {
        public string? name { get; set; }

        public DateTime? creation_date { get; set; }

        public bool? active { get; set; }
    }
}