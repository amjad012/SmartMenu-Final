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

            await context.Tables.AddRangeAsync(tables);
            await context.SaveChangesAsync();
        }
    }
}