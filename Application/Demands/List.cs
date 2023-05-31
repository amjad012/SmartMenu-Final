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
     public class List
    {
        public class Query : IRequest<Result<List<DemandDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<DemandDto>>>
        {
            private readonly DataContext _context;
        private readonly IMapper _mapper;

            public Handler(DataContext context,IMapper mapper)
            {
                 _mapper = mapper;
                _context = context;
            }

            public async Task<Result<List<DemandDto>>> Handle(Query request, CancellationToken token)
            {
                var demans = await _context.Demands
                    .ProjectTo<DemandDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(token);

                return Result<List<DemandDto>>.Success(demans);
            }
        }
    }
}