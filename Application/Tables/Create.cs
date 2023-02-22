using Domain;
using MediatR;
using Persistence;

namespace Application.Tables
{
    public class Create
    {
        public class Command : IRequest
        {
            public Table Table { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Tables.Add(request.Table);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
