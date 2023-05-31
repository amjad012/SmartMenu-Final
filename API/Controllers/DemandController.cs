using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Application.Demands;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class DemandController : BaseApiController
    {
       [HttpGet]
        public async Task<IActionResult> GetDemands()
        {
            return HandleResult(await Mediator.Send(new List.Query())); 
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDemand(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateDemand(Demand demand)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Demand = demand }));
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(Guid id, Demand demand)
        {
            demand.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Demand = demand }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}