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
        public Object Post([FromBody]Object value)
        {
            return value;
        }
    }
}
