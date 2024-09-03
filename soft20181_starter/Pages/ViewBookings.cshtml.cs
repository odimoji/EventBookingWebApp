using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using soft20181_starter.Models;

namespace soft20181_starter.Pages
{
    public class ViewBookingsModel : PageModel
    {

        public List<Booking> Bookings { get; set; }

        private readonly EventAppDbContext dbContext;
        public ViewBookingsModel(EventAppDbContext _db)
        {
            dbContext = _db;
            
        }
        public void OnGet()
        {
            Bookings = dbContext.Bookings.ToList();
        }
    }
}
