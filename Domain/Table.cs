namespace Domain
{
    public class Table
    {
        public Guid Id { get; set; }
        public DateTime Date { get; set; } 
        public int Number { get; set; }
        
        public ICollection<TableAttendee > Attendees{ get; set; } = new List<TableAttendee>(); 
    }
}