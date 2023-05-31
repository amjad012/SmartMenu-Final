using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Demands
{
    public class Details
    {
        public class Query : IRequest<Result<DemandDto>>
        {
            public Guid Id { get; set; }
        } 

        public class Handler : IRequestHandler<Query, Result<DemandDto>>
        {
            private readonly DataContext _context;
        private readonly IMapper _mapper;

            public Handler(DataContext context,IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<DemandDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                
                var demand =  await _context.Demands
                    .ProjectTo<DemandDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);
                return Result<DemandDto>.Success(demand);
            }
        }
    }
}