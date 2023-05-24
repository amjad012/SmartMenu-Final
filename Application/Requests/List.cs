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

namespace Application.Requests
{
    public class List
    {
        public class Query : IRequest<Result<List<RequestDto>>>{}

        public class Handler : IRequestHandler<Query, Result<List<RequestDto>>>
        {
            private readonly DataContext _context;
        private readonly IMapper _mapper;

            public Handler(DataContext context,IMapper mapper)
            {
                 _mapper = mapper;
                _context = context;
            }

            public async Task<Result<List<RequestDto>>> Handle(Query request, CancellationToken token)
            {
                var requests = await _context.Requests
                    .ProjectTo<RequestDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(token);

                return Result<List<RequestDto>>.Success(requests);
            }
        }
        
    }
}