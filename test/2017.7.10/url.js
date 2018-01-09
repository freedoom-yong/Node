var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain;charset = utf-8'});
	
	//解析url参数
	var parse = url.parse(req.url,true).query;
	res.write("网站名："+parse.name);
	res.write("\n");
	res.write("网站URL："+parse.url);
	res.end();
}).listen(3000);