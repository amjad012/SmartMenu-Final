using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

//this is going to be for our registered DTO

namespace API.DTOs
{
    public class RegisterDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string DisplayName { get; set; }
        public string UserName { get; set; }
    }
}