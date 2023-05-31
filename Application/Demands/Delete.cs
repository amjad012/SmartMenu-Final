using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistence;

namespace Application.Demands
{
    public class Delete
    {
         public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var demand = await _context.Demands.FindAsync(request.Id);

                if(demand == null) return null;   
                _context.Remove(demand);

                var result = await _context.SaveChangesAsync()>0;
                if(!result) return Result<Unit>.Failure("Failed to delete the demand");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}