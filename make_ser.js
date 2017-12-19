var http = require("http");
    http.createServer(function(req,res){
        if(req.url === "/about"){
            console.log(req.url);
            res.end();
        }else if(req.url === "/stop"){
            console.log("Stop");
            
            res.end();
        };
    }).listen(3000);