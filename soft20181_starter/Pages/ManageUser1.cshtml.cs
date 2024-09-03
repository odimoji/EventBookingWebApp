using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using soft20181_starter.Models;
using System.Data;

namespace soft20181_starter.Pages
{

    [Authorize(Roles = "Admin")]
    public class ManageUser1Model : PageModel
    {
        private readonly UserManager<AppUser> _userManager;

        public ManageUser1Model(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        [BindProperty(SupportsGet = true)]
        public string id { get; set; }

        [BindProperty]
        public string passwordString { get; set; }
        public List<AppUser> users { get; set; }

        public async Task<IActionResult> OnGetAsync()
        {

            users = await _userManager.Users.ToListAsync();

            return Page();

        }

        public async Task<IActionResult> OnGetDeleteAsync()
        {
            var user = await _userManager.FindByIdAsync(id);
            var result = await _userManager.DeleteAsync(user);
            return RedirectToPage("/ManageUser1");
        }

        public async Task<IActionResult> OnPostUpdateAsync()
        {
            var user = await _userManager.FindByIdAsync(id);
            await _userManager.RemovePasswordAsync(user);
            await _userManager.AddPasswordAsync(user, passwordString);
            return RedirectToPage("ManageUser1");

        }
    }
}
