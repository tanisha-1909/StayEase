const express= require('express');
const app= express();
const mongoose= require('mongoose');
const Listing= require("./models/listing.js")

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/stayease');
}
main()
.then((res)=>{console.log("connected to database")})
.catch((err)=>{console.log(err)});


app.listen(8080,()=>{
    console.log("server is listening at port 8080")
})

app.get("/", (req,res)=>{
    res.send("I am root");
})

app.get("/testListing", async (req,res)=>{
    let sampleListing= new Listing({
        title:"My Villa",
        description:"Off shore",
        price:1200,
        location:"Alwar, Rajasthan",
        country:"India"
    });
    await sampleListing.save();
    console.log(sampleListing);
    res.send("working");
})
