using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using soft20181_starter.Models;

namespace soft20181_starter.Pages
{
    public class ViewContactsModel : PageModel
    {
        public List<Contact> Contacts { get; set; }

        private readonly EventAppDbContext dbContext;
        public ViewContactsModel(EventAppDbContext _db)
        {
            dbContext = _db;

        }
        public void OnGet()
        {
            Contacts = dbContext.Contacts.ToList();
        }
    }
}
