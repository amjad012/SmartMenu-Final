using Domain;
using FluentValidation;

namespace Application.Tables
{
    public class TableValidator : AbstractValidator<Table>
    {
        public TableValidator()
        {
            RuleFor(x => x.Number).Equals(0);
            RuleFor(x => x.Date).NotEmpty();
            
        }
    }
}