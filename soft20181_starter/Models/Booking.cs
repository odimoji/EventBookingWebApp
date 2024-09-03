namespace soft20181_starter.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public string EventDate { get; set; }

        public string ImageUrl { get; set; }

        public int Quantity { get; set; }


    }

    
}
