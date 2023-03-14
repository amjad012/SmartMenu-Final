using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Tables
{
    public class List
    {
        public class Query : IRequest<Result<List<Table>>> { }

        public class Handler : IRequestHandler<Query, Result<List<Table>>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<Table>>> Handle(Query request, CancellationToken token)
            {
                var tables = await _context.Tables
                    .Include(a => a.Attendees)
                    .ThenInclude(u => u.AppUser)
                    .ToListAsync(token);
                return Result<List<Table>>.Success(tables);
            }
        }
    }
}