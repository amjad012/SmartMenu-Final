using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
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

            if(context.Requests.Any()) return;

            var requests = new List<Request> {
                
                new Request
                {
                    Name = "Cleaning the table",
                    Date = DateTime.UtcNow.AddMonths(-2)
                },
                new Request
                {
                    Name = "Check",
                    Date = DateTime.UtcNow.AddMonths(-2)
                },
                new Request
                {
                    Name = "Fork",
                    Date = DateTime.UtcNow.AddMonths(-2)
                },
                new Request
                {
                    Name = "Plate",
                    Date = DateTime.UtcNow.AddMonths(-2)
                },
                new Request
                {
                    Name = "Knife",
                    Date = DateTime.UtcNow.AddMonths(-2)
                },
                new Request
                {
                    Name = "Glass",
                    Date = DateTime.UtcNow.AddMonths(-2)
                },
                new Request
                {
                    Name = "Pepper",
                    Date = DateTime.UtcNow.AddMonths(-2)
                },
                new Request
                {
                    Name = "Salt",
                    Date = DateTime.UtcNow.AddMonths(-2)
                },
                new Request
                {
                    Name = "Tissues",
                    Date = DateTime.UtcNow.AddMonths(-2)
                },
                new Request
                {
                    Name = "Limon",
                    Date = DateTime.UtcNow.AddMonths(-2)
                },
                new Request
                {
                    Name = "Wipes",
                    Date = DateTime.UtcNow.AddMonths(-2)
                },
                new Request
                {
                    Name = "Menu",
                    Date = DateTime.UtcNow.AddMonths(-2)
                },
                new Request
                {
                    Name = "Toothpick",
                    Date = DateTime.UtcNow.AddMonths(-2)
                },

            };
            await context.Tables.AddRangeAsync(tables);
            await context.Requests.AddRangeAsync(requests);
            await context.SaveChangesAsync();
        }
    }
}