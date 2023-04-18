namespace ATS.Domain.Models
{
    public class Students : BaseEntity
    {
        public string? name { get; set; }

        public string? last_name { get; set; }

        public DateTime creation_date { get; set; }

        public bool active { get; set; }
    }
}