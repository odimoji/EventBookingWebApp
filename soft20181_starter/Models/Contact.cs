using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace soft20181_starter.Models
{
    public class Contact
    {
        public int Id { get; set; }

        [Required]
        public string Firstname { get; set; }

        
        [Required]
        public string Lastname { get; set; }

        
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        
        [Required]
        [Phone]
        public string Phone { get; set; }

        [Required]
        public string Customermessage { get; set; }
    }
}
