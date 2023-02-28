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

namespace Application.Requests
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Request Request { get; set; }
        }
         public class CommandValidator : AbstractValidator<Command> // for validate
        {
            public CommandValidator()
            {
                RuleFor(x => x.Request).SetValidator(new RequestValidator());             
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
                var rqst = await _context.Requests.FindAsync(request.Request.Id);

                if(rqst == null) return null;

                _mapper.Map(request.Request, rqst);

                var result = await _context.SaveChangesAsync() > 0;// number of changing great than 0
                
                if(!result) return Result<Unit>.Failure("Failed to update request");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}