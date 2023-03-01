using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// this is going to have the properties that we want to 
// send back when a client has successfully logged in or registred
namespace API.DTOs
{
    public class UserDto
    {
       public string DisplayName { get; set; } 
       public string Token { get; set; }
       public string Image { get; set; }
       public string UserName { get; set; }
    }
}