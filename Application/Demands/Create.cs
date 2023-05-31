using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Demands
{
    public class Create
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

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Demands.Add(request.Demand);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to create demand");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}