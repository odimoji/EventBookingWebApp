using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using soft20181_starter.Models;

namespace soft20181_starter.Pages
{
    [Authorize(Roles = "Admin")]
    public class AddEventModel : PageModel
    {
        private readonly EventAppDbContext dbContext;
        public AddEventModel(EventAppDbContext _db)
        {
            dbContext = _db;
        }

        [BindProperty]
        public TheEvent AnEvent { get; set; }
        public void OnGet()
        {
        }

        public IActionResult OnPost()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }
            else 
            {
                dbContext.Eventss.Add(AnEvent);
                dbContext.SaveChanges();
                return RedirectToPage("Eventss");
                return RedirectToPage("Index");

                
            }
            
        }
    }
}
