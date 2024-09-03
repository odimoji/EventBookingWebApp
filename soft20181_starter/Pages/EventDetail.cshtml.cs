using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using soft20181_starter.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace soft20181_starter.Pages
{
    public class EventDetailModel : PageModel
    {
        public TheEvent AnEvent { get; set; }

        [BindProperty]
        public Booking ABooking { get; set; }

        public AppUser TheUser { get; set; }
        public List<Booking> BookingList { get; set; }

        [BindProperty(SupportsGet = true)]
        public int id { get; set; }

        private readonly UserManager<AppUser> _userManager;
        
        

        private readonly EventAppDbContext dbContext;
        public EventDetailModel(EventAppDbContext _db, UserManager<AppUser> userManager)
        {
            dbContext = _db;
            _userManager = userManager;
        }
        public void OnGet()
        {
            AnEvent = dbContext.Eventss.Find(id);

        }

        public IActionResult OnPost()
        {
            var user = _userManager.FindByNameAsync(User.Identity.Name);
            TheUser = user.Result;

            ABooking.UserId = TheUser.Id;

            dbContext.Bookings.Add(ABooking);
            dbContext.SaveChanges();
            BookingList = dbContext.Bookings.ToList();
            return RedirectToPage("Bookings");
        }
    }
            
}
