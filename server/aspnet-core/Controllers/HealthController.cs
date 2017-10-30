using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace aspnet_core.Controllers
{
    [EnableCors("MyPolicy")]
    public class HealthController : Controller
    {
        [HttpPost]
        public dynamic Post([FromBody]dynamic value)
        {
            value.text = $"{value.text} from .NET Core";
            return value;
        }
    }
}
