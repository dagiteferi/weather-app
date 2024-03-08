const { log } = require("console");
const express = require("express");
const https = require("https");
const BodyParser = require("body-parser");
const bodyParser = require("body-parser");


app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
   res.sendFile(__dirname + "/index.html") 


   
   
});
app.post("/", function(req, res){
    // console.log(req.body.entercity);

    const query =req.body.entercity;
const apiey ="89a5d79ab2a276f3ecd87de2748dd5cf";
const unit ="metric";
const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiey+"&units="+unit+"";
https.get(url , function(respons){
   

    respons.on("data" ,function(data){

        const wData = JSON.parse(data);
        const Tempr =wData.main.temp;
        const description =wData.weather[0].description;
        const icon = wData.weather[0].icon;
        
            const imagurl = " https://openweathermap.org/img/wn/10d@2x.png" + icon;
            res.write("<p>The temp in "+req.body.entercity+" now is =" + description +" C</p>");
            res.write("<h1>The temp in "+req.body.entercity+" now is =" + Tempr +" C</h1>");
            res.write("<img src="+imagurl+">");
       
         
        
    })
})
 });

app.listen(3002 , function(){
    console.log("the server is start");
});