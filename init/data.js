const sampleListings = [
  {
    title: "Cozy Cabin in the Woods",
    description: "Escape to this peaceful cabin surrounded by nature. Perfect for a relaxing getaway.",
    price: "120",
    location: "AshevilleNC",
    country: "USA",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/white-bed-linen-with-throw-pillows-Yrxr3bsPdS0"
    }
  },
  {
    title: "Luxury Beachfront Villa",
    description: "Enjoy breathtaking ocean views from this stunning villa with private beach access.",
    price: "350",
    location: "MalibuCA",
    country: "USA",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/a-couple-of-lawn-chairs-sitting-next-to-a-pool-iWmf9Gl3yMw"
    }
  },
  {
    title: "Modern Downtown Loft",
    description: "Stay in the heart of the city in this stylish loft with all modern amenities.",
    price: "2000",
    location: "NewYorkNY",
    country: "USA",
    image: {
      filename: "listingimage",
      url:"https://unsplash.com/photos/3d-render-of-luxury-hotel-lobby-and-reception-wVmIezfRjUA"
    }
  },
  {
    title: "Rustic Mountain Retreat",
    description: "A beautiful retreat nestled in the mountains with a cozy fireplace and scenic views.",
    price: "150",
    location: "DenverCO",
    country: "USA",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/coconut-palm-trees-in-hotel-lobby-_dS27XGgRyQ"
    }
  },
  {
    title: "Charming Countryside Cottage",
    description: "A quaint and charming cottage perfect for a peaceful countryside escape.",
    price: "2308",
    location: "NashvilleTN",
    country: "USA",
    image: {
      filename: "listingimage",
      url:"https://unsplash.com/photos/a-couple-of-lawn-chairs-sitting-next-to-a-pool-iWmf9Gl3yMw"
    }
  },
  {
    title: "Sunny Beach House",
    description: "A bright and airy beach house just steps from the ocean with a private deck.",
    price: "1526",
    location: "MiamiFL",
    country: "USA",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/person-in-swimming-pool-during-daytime-rlwE8f8anOc"
    }
  },
  {
    title: "Secluded Jungle Bungalow",
    description: "A unique stay deep in the jungle, offering a one-of-a-kind nature experience.",
    price: "5678",
    location: "Bali",
    country: "Indonesia",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/photo-of-brown-bench-near-swimming-pool-Koei_7yYtIo"
    }
  },
  {
    title: "Historic Paris Apartment",
    description: "A classic Parisian apartment with stunning views of the Eiffel Tower.",
    price: "10890",
    location: "Paris",
    country: "France",
    image: {
      filename: "listingimage",
      url:"https://unsplash.com/photos/a-large-swimming-pool-surrounded-by-palm-trees-_pPHgeHz1uk"
    }
  },
  {

    title: "Lakefront Cabin Retreat",
    description: "A peaceful retreat by the lake, perfect for fishing and nature lovers.",
    price: "7830",
    location: "LakeTahoeCA",
    country: "USA",
    image: {
      filename: "listingimage",
      url:"https://unsplash.com/photos/gray-table-lamp-beside-white-bed-pillow-uocSnWMhnAs"
    }
  },
  {
    title: "Japanese Ryokan Experience",
    description: "Experience traditional Japanese hospitality in this authentic ryokan.",
    price: "21002",
    location: "Kyoto",
    country: "Japan",
    image: {
      filename: "listingimage",
      url:"https://unsplash.com/photos/brown-wooden-lounge-chairs-near-pool-surrounded-by-palm-trees-vmIWr0NnpCQ"
    }
  },
  {
    title: "Ski-In Ski-Out Chalet",
    description: "A perfect winter retreat right on the slopes for skiing enthusiasts.",
    price: "2291",
    location: "AspenCO",
    country: "USA",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/black-and-white-bed-near-brown-wooden-table-T5pL6ciEn-I"
    }
  },
  {
    title: "Tropical Island Villa",
    description: "A luxurious villa on a remote island with private beaches and lush surroundings.",
    price: "19202",
    location: "Maldives",
    country: "Maldives",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/3d-render-of-luxury-hotel-room-with-double-bed-gTA4bkiD2Xw"
    }
  },
  {
    title: "Classic London Flat",
    description: "A chic apartment in central London, close to major attractions and transport.",
    price: "29992",
    location: "London",
    country: "UK",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/brown-wooden-lounge-chairs-on-brown-wooden-dock-during-daytime-xEaAoizNFV8"
    }
  },
  {
    title: "Safari Tent Retreat",
    description: "Experience wildlife up close in this luxury safari tent with all modern comforts.",
    price: "9999",
    location: "Serengeti",
    country: "Tanzania",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/round-white-ceramic-table-ZAVHbpOn4Jk"
    }
  },
  {
    title: "Greek Island Escape",
    description: "A white-washed house with blue domes overlooking the Aegean Sea.",
    price: "89002",
    location: "Santorini",
    country: "Greece",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/blue-swimming-pool-beside-white-building-bAK9wQghnHI"
    }
  },
  {
    title: "Forest Treehouse",
    description: "Stay in a treehouse high above the forest for a magical nature retreat.",
    price: "2911",
    location: "British Columbia",
    country: "Canada",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/tall-building-in-the-center-of-the-city-fQM60anQ594"
    }
  },
  {
    title: "Floating Houseboat",
    description: "A peaceful stay in a floating houseboat with stunning water views.",
    price: "8291",
    location: "Amsterdam",
    country: "Netherlands",
    image: {
      filename: "listingimage",
      url:"https://unsplash.com/photos/white-and-blue-glass-building-3k-Z6livTWE"
    }
  },
  {
    title: "Alpine Ski Lodge",
    description: "A cozy ski lodge in the Alps with breathtaking mountain views.",
    price: "1111",
    location: "Zermatt",
    country: "Switzerland",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/a-large-building-with-a-fountain-in-front-of-it-o1TDUU5NNR4"
    }
  },
  {
    title: "Royal Heritage Hotel",
    description: "Stay in a former palace with luxurious rooms and a rich history.",
    price: "6666",
    location: "Jaipur",
    country: "India",
    image: {
      filename: "listingimage",
      url:"https://unsplash.com/photos/burj-al-arab-dubai-united-arab-emirates-during-daytime-vtK31JoeAFk"
    }
  },
  {

    title: "Igloo Adventure Stay",
    description: "A cozy glass igloo offering incredible views of the Northern Lights.",
    price: "2920",
    location: "Lapland",
    country: "Finland",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/brown-concrete-building-YHXPbTj7Q9Q"
    }
  }
];

module.exports = { data: sampleListings };
