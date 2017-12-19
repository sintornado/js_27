var fs = require("fs");
var http = require("http");

var fileForStream = fs.createWriteStream("stream.txt");
var fileForFile = fs.createWriteStream("file.txt");

for(var i=0;i<=1000000;i++){
    fileForStream.write("qetwgwrgegrg,egbjerbvnerbvberbvjebvbervkb;rekjknvenvlnevljeljvnlje");
    fileForFile.write("lenvljenfvjelnvlenvjlnnvnevlneljvnljenvjlnevnenvnejlnv");
};
fileForStream.end();
fileForFile.end();

http.createServer(function(req, res){
    if(req.url === "/stream"){
        var forStream = fs.createReadStream("stream.txt");
            forStream.pipe(res); 
    }else if(req.url === "/file"){
        fs.readFile('file.txt', function(err, data){
			if (err) throw new Error;
			res.write(data);
			res.end();
    });
};
}).listen(3000);