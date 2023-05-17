using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mcsd
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //
            using (var db = new mcsd.Core.Library.mcsdexnacatoContext())
            {
                var data = db.Persona.ToList();
                foreach (var persona in data)
                {
                    System.Diagnostics.Debug.WriteLine("Reading Data : {0} ",persona.NombreCompleto);
                }
            }
            
            //
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
