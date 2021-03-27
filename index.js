const http = require('http')

http.createServer(function(request,response)
{

    response.setHeader("Content-Type","text/html; charset=utf-8;");

    if(request.url === "/home" || request.url === "/")
    {
        response.write('<h2>Main</h2>')
    }
    else if(request.url == "/is-91-010")
    {
        response.write('<h2> Кравченко Роман ІС-91 </h2>');
    }
    else
    {
        response.write('<h2>404 Not Found</h2>');
    }
    response.end();
}).listen(3000);