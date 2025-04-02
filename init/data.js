const sampleListings = [
  {
    title: "Cozy Cabin in the Woods",
    description: "Escape to this peaceful cabin surrounded by nature. Perfect for a relaxing getaway.",
    price: "$120/night",
    location: "Asheville, NC",
    country: "USA",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/white-bed-linen-with-throw-pillows-Yrxr3bsPdS0"
    }
  },
  {
    title: "Luxury Beachfront Villa",
    description: "Enjoy breathtaking ocean views from this stunning villa with private beach access.",
    price: "$350/night",
    location: "Malibu, CA",
    country: "USA",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/a-couple-of-lawn-chairs-sitting-next-to-a-pool-iWmf9Gl3yMw"
    }
  },
  {
    title: "Modern Downtown Loft",
    description: "Stay in the heart of the city in this stylish loft with all modern amenities.",
    price: "$200/night",
    location: "New York, NY",
    country: "USA",
    image: {
      filename: "listingimage",
      url:"https://unsplash.com/photos/3d-render-of-luxury-hotel-lobby-and-reception-wVmIezfRjUA"
    }
  },
  {
    title: "Rustic Mountain Retreat",
    description: "A beautiful retreat nestled in the mountains with a cozy fireplace and scenic views.",
    price: "$150/night",
    location: "Denver, CO",
    country: "USA",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/coconut-palm-trees-in-hotel-lobby-_dS27XGgRyQ"
    }
  },
  {
    title: "Charming Countryside Cottage",
    description: "A quaint and charming cottage perfect for a peaceful countryside escape.",
    price: "$100/night",
    location: "Nashville, TN",
    country: "USA",
    image: {
      filename: "listingimage",
      url:"https://unsplash.com/photos/a-couple-of-lawn-chairs-sitting-next-to-a-pool-iWmf9Gl3yMw"
    }
  },
  {
    title: "Sunny Beach House",
    description: "A bright and airy beach house just steps from the ocean with a private deck.",
    price: "$180/night",
    location: "Miami, FL",
    country: "USA",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/person-in-swimming-pool-during-daytime-rlwE8f8anOc"
    }
  },
  {
    title: "Secluded Jungle Bungalow",
    description: "A unique stay deep in the jungle, offering a one-of-a-kind nature experience.",
    price: "$140/night",
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
    price: "$250/night",
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
    price: "$130/night",
    location: "Lake Tahoe, CA",
    country: "USA",
    image: {
      filename: "listingimage",
      url:"https://unsplash.com/photos/gray-table-lamp-beside-white-bed-pillow-uocSnWMhnAs"
    }
  },
  {
    title: "Japanese Ryokan Experience",
    description: "Experience traditional Japanese hospitality in this authentic ryokan.",
    price: "$220/night",
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
    price: "$300/night",
    location: "Aspen, CO",
    country: "USA",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/black-and-white-bed-near-brown-wooden-table-T5pL6ciEn-I"
    }
  },
  {
    title: "Tropical Island Villa",
    description: "A luxurious villa on a remote island with private beaches and lush surroundings.",
    price: "$500/night",
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
    price: "$270/night",
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
    price: "$220/night",
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
    price: "$280/night",
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
    price: "$160/night",
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
    price: "$210/night",
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
    price: "$320/night",
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
    price: "$600/night",
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
    price: "$400/night",
    location: "Lapland",
    country: "Finland",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/brown-concrete-building-YHXPbTj7Q9Q"
    }
  }
];

module.exports = { data: sampleListings };
