const express= require('express');
const app= express();
const mongoose= require('mongoose');
const Listing= require("./models/listing.js")
const path= require("path");
const methodoverride= require("method-override");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));

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

app.get("/listings/stay", async(req,res)=>{
    res.render("./listings/newList.ejs");
})

app.get("/listings/:id", async(req,res)=>{
    let {id}= req.params;
    const listing=  await Listing.findById(id);
    res.render("./listings/show.ejs", {listing});
})

app.post("/listings", async(req,res)=>{
    let {title,description,image,price,country,location} = req.body;
    const newListing=new Listing({
        title:title,
        description:description,
        image:image,
        price:price,
        country:country,
        location:location
    });
    await newListing.save();
    res.redirect("/listings");
    
})

app.get("/listings/:id/edit",async (req,res)=>{
    let {id}= req.params;
    
    const listing= await Listing.findById(id);
    // console.log(listing);
     res.render("./listings/edit.ejs",{listing});
})

app.put("/listings/:id", async(req,res)=>{
    let {id}= req.params;
    const listing= await Listing.findById(id);
    // console.log(req.body);
    console.log(req.body.listing);
    await Listing.findByIdAndUpdate(id,{ 
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        location:req.body.location,
        country:req.body.country,
        image: req.body.image
    },{new:true, runValidators:true});
    res.redirect("/listings");
})

app.delete("/listings/:id", async(req,res)=>{
    let {id}= req.params;
    let deletedStay= await Listing.findByIdAndDelete(id);
    console.log(deletedStay);
    res.redirect("/listings");
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
