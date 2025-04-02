const express= require('express');
const app= express();
const mongoose= require('mongoose');
const Listing= require("./models/listing.js")
const path= require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

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

app.get("/listings", async (req,res)=>{
    const allListings=await Listing.find({});
    res.render("./listings/allList.ejs",{allListings})
})

app.get("/listings/:id", async(req,res)=>{
    let {id}= req.params;
    const listing=  await Listing.findById(id);
    res.render("./listings/show.ejs", {listing});
})

// app.get("/testListing", async (req,res)=>{
//     let sampleListing= new Listing({
//         title:"My Villa",
//         description:"Off shore",
//         price:1200,
//         location:"Alwar, Rajasthan",
//         country:"India"
//     });
//     await sampleListing.save();
//     console.log(sampleListing);
//     res.send("working");
// })
