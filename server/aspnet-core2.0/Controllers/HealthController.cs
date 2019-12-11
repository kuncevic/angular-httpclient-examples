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
        public dynamic Post([FromBody]dynamic data)
        {
            data.text = $"{data.text} from .NET Core";
            return data;
        }
    }
}
