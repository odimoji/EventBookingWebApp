using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using soft20181_starter.Models;

namespace soft20181_starter.Pages
{

    [Authorize]
    public class BookingsModel : PageModel
    {
        [BindProperty(SupportsGet =true)]
        public int id { get; set; }

        private readonly EventAppDbContext dbContext;
        public BookingsModel(EventAppDbContext _db)
        {
            dbContext = _db;
        }

        public List<Booking> Bookings { get; set; }
        public void OnGet()
        {
            Bookings = dbContext.Bookings.ToList();

        }

        public IActionResult OnGetDelete()
        {
            dbContext.Remove(dbContext.Bookings.Find(id));
            dbContext.SaveChanges();
            return RedirectToPage("Bookings");
        }
    }
}
