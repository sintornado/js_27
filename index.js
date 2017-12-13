var Event = require("events").EventEmitter;
var emt = new Event();
var date = new Date();

emt.on('login',function(){
    console.log("Enter..... " + date);
});
emt.on('someAction',function(){
    setTimeout(function(){
        console.log("do something..... " + date);
    }, 2000);
    });
emt.on('logout',function(){
    setTimeout(function(){
        console.log("Exit...... " + date);
    }, 4000);
});

emt.emit("login");
emt.emit("someAction");
emt.emit("logout");