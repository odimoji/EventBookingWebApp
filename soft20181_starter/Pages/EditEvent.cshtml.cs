using Humanizer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.DotNet.Scaffolding.Shared.CodeModifier.CodeChange;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.Blazor;
using soft20181_starter.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using System.Runtime.Intrinsics.X86;
using Microsoft.AspNetCore.Authorization;

namespace soft20181_starter.Pages
{
    [Authorize(Roles = "Admin")]
    public class EditEventModel : PageModel
    {

        [BindProperty]
        public TheEvent AnEvent { get; set; }

        [BindProperty(SupportsGet = true)]
        public int Id { get; set; }

        private readonly EventAppDbContext dbContext;
        public EditEventModel(EventAppDbContext _db)
        {
            dbContext = _db;
        }
        public void OnGet()
        {
            AnEvent = dbContext.Eventss.Find(Id);
        }

        public IActionResult OnGetDelete()
        {
            dbContext.Remove(dbContext.Eventss.Find(Id));
            dbContext.SaveChanges();
            return RedirectToPage("Eventss");
        }

        public IActionResult OnPost()
        {
            if (ModelState.IsValid)
            {
                dbContext.Eventss.Update(AnEvent);
                dbContext.SaveChanges();
                return RedirectToPage("Eventss");
            }
            else
            {
                return Page();
            }
        }

    }
}
