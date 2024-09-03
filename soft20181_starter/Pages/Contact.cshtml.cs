using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using soft20181_starter.Models;

namespace soft20181_starter.Pages
{
    public class ContactModel : PageModel
    {
        private readonly EventAppDbContext dbContext;
        public ContactModel(EventAppDbContext _db)
        {
            dbContext = _db;
        }
        [BindProperty]
        public Contact ContactInfo { get; set; }

        public string Message { get; set; }

        public string Message1 { get; set; }


        public void OnGet()
        {
            Message = "Please enter contact details below";
        }

        public IActionResult OnPost()
        {
            if(ModelState.IsValid)
            {
                dbContext.Contacts.Add(ContactInfo);
                dbContext.SaveChanges();
                
                return RedirectToPage("Index");
                // Save to Database
                // Show success message
                // return
                
            }
            else
            {
                return Page();
            }

            Message1 = "Thankyou " + ContactInfo.Firstname + " we will be in contaact shortly";

        }
    }
}
