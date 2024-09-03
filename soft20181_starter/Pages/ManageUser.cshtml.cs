using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using soft20181_starter.Models;

namespace soft20181_starter.Pages
{

    [Authorize(Roles = "Admin")]
    public class ManageUserModel : PageModel
    {
        private readonly RoleManager<IdentityRole> _roleManager;
        

        public ManageUserModel(RoleManager<IdentityRole> roleManager)
        {
            _roleManager = roleManager;
            
        }

       

        public List<IdentityRole> roles { get; private set; }
       

        [BindProperty(SupportsGet = true)]
        public string id { get; set; }

        public async Task<IActionResult> OnGetAsync()
        {
            roles = await _roleManager.Roles.ToListAsync();


            return Page();
            
        }

        public async Task<IActionResult> OnGetDeleteAsync()
        {
            var role = await _roleManager.FindByIdAsync(id);
            var result = await _roleManager.DeleteAsync(role);
            return RedirectToPage("/ManageUser");
        }

       

    }
}
