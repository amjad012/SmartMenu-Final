using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using FluentValidation;

namespace Application.Demands
{
    public class DemandValidator : AbstractValidator<Demand>
    {
        public DemandValidator()
        {
            RuleFor(x => x.Body).NotEmpty();   
        }
    }
}