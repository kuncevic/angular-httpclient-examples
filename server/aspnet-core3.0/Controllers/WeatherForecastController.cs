using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    //[EnableCors("MyPolicy")]
    //ref: https://docs.microsoft.com/en-us/aspnet/core/security/enforcing-ssl?view=aspnetcore-3.1&tabs=visual-studio
    public class WeatherForecastController : ControllerBase
    {
        [HttpPost]
        public dynamic Post([FromBody]dynamic data)
        {
            data.text = $"{data.text} from .NET Core";
            return data;
        }
    }
}
