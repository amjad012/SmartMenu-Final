using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Tables
{
    public class Details
    {
        public class Query : IRequest<Result<Table>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Table>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Table>> Handle(Query request, CancellationToken cancellationToken)
            {
                
                var table =  await _context.Tables.FindAsync(request.Id);
                return Result<Table>.Success(table);
            }
        }
    }
}