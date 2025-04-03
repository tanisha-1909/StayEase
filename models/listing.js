const mongoose= require('mongoose');

// const Schema= mongoose.Schema;

const listingSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image: {
        filename: String,
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
            set: (v) => v && v.trim() !== "" ? v : "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"
        }
    },
    price:String,
    location:String,
    country: String
});

const Listing= mongoose.model("Listing",listingSchema);
module.exports=Listing;