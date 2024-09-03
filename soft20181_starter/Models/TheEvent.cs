using System.Security.Policy;

namespace soft20181_starter.Models
{
    public class TheEvent
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public string LocationUrl { get; set; }
        public DateTime EventDate { get; set; }
        public string ImageUrl { get; set; }
    }
}
