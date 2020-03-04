var http=require('http')
var otp=""+Math.floor(Math.random() * 10)+Math.floor(Math.random() * 10)+Math.floor(Math.random() * 10)+Math.floor(Math.random() * 10)
var server=http.createServer((function(request,response)
{
	response.writeHead(200,
	{"Content-Type" : "text/plain"});
	response.end(otp);
}));
server.listen(7000);
console.log('server running...')