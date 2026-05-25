var builder = WebApplication.CreateBuilder(args);

builder.WebHost.UseUrls("http://localhost:3001");

builder.Services.AddCors(options =>
    options.AddDefaultPolicy(policy =>
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()));

var app = builder.Build();

app.UseCors();

app.MapPost("/ping", (Message msg) =>
{
    msg.Text = $"{msg.Text} from .NET";
    return Results.Ok(msg);
});

app.Run();

record Message(long Id, string Text)
{
    public string Text { get; set; } = Text;
}
