using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using soft20181_starter.Models;
using System.Collections.Generic;
using System.Linq;

namespace soft20181_starter.Pages
{
    [Authorize]
    public class EventssModel : PageModel
    {
        private readonly EventAppDbContext dbContext;
        public EventssModel(EventAppDbContext _db)
        {
            dbContext = _db;
        }

        public List<TheEvent> Eventss { get; set; }

        public void OnGet(string searchTerm)
        {
            IQueryable<TheEvent> eventsQuery = dbContext.Eventss;

            // Filter events if search term is provided
            if (!string.IsNullOrEmpty(searchTerm))
            {
                eventsQuery = eventsQuery.Where(e => e.Title.Contains(searchTerm));
            }

            Eventss = eventsQuery.ToList();
        }
    }
}
