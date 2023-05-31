using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Demands
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Demand Demand { get; set; }
        }
         public class CommandValidator : AbstractValidator<Command> // for validate
        {
            public CommandValidator()
            {
                RuleFor(x => x.Demand).SetValidator(new DemandValidator());             
            }
        }

        public class Handler : IRequestHandler<Command,Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var demand = await _context.Demands.FindAsync(request.Demand.Id);

                if(demand == null) return null;

                _mapper.Map(request.Demand, demand);

                var result = await _context.SaveChangesAsync() > 0;// number of changing great than 0
                
                if(!result) return Result<Unit>.Failure("Failed to update demand");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}