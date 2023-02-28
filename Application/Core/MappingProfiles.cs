using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Table, Table>();
            CreateMap<Request, Request>();
        }
    }
}