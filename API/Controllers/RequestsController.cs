using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Requests;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class RequestsController : BaseApiController
    {
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetRequests()
        {
            return HandleResult(await Mediator.Send(new List.Query())); 
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRequest(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateRequest(Request request)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Request = request }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(Guid id, Request request)
        {
            request.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Request = request }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}