using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context,UserManager<AppUser> userManager)
        {

            if(!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{DisplayName = "Admin", UserName="admin", Email="admin@test.com"},
                    new AppUser{DisplayName = "Amjad", UserName="amjad", Email="amjad@test.com"},
                    new AppUser{DisplayName = "Bob", UserName="bob", Email="bob@test.com"},
                    new AppUser{DisplayName = "jane", UserName="jane", Email="jane@test.com"},
                    new AppUser{DisplayName = "rexo", UserName="rexo", Email="rexo@test.com"}
                };
                foreach(var user in users)
                {
                    await userManager.CreateAsync(user,"Pa$$w0rd");
                }
            }

            if (context.Tables.Any()) return;
            
            var tables = new List<Table>

            {
                new Table
                {
                   
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Number = 1
                },
              
               new Table
                {
                   
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Number = 2
                },
                new Table
                {
                   
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Number = 3
                },
                new Table
                {
                   
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Number = 4
                },
                new Table
                {
                   
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Number = 5
                },
                new Table
                {
                   
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Number = 6
                },
                new Table
                {
                   
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Number = 7
                },
               new Table
                {
                   
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Number = 8
                },
                new Table
                {
                   
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Number = 9
                },
                new Table
                {
                   
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Number = 10
                },
            };
          
            await context.Tables.AddRangeAsync(tables);
            await context.SaveChangesAsync();
        }
    }
}