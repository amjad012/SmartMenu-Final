using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
        
        public string Bio { get; set; }
        public string UserType { get; set; }

        public ICollection<TableAttendee>Tables { get; set; }
    }
}