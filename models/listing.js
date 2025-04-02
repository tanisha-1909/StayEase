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
            set: (v) => v === "" ? "https://unsplash.com/photos/coconut-palm-trees-in-hotel-lobby-_dS27XGgRyQ" : v
        }
    },
    price:Number,
    location:String,
    country: String
});

const Listing= mongoose.model("Listing",listingSchema);
module.exports=Listing;