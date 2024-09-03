using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace soft20181_starter.Models
{
    public class EventAppDbContext : IdentityDbContext<AppUser>
    {
        
        public EventAppDbContext(DbContextOptions<EventAppDbContext> options) : base(options)
        {
            
        }

        public DbSet<TheEvent> Eventss { get; set; }
        public DbSet<Contact> Contacts { get; set; }

        public DbSet<Booking> Bookings { get; set; }

    }

}
