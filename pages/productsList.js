const products = [
  {
    id: 1,
    name: "Big Mac",
    price: 2,
    image: "/products_images/big-mac.jpg",
  },
  {
    id: 2,
    name: "Flip Flops",
    price: 3,
    image: "/products_images/flip-flops.jpg",
  },
  {
    id: 3,
    name: "Coca-Cola Pack",
    price: 5,
    image: "/products_images/coca-cola-pack.jpg",
  },
  {
    id: 4,
    name: "Movie Ticket",
    price: 12,
    image: "/products_images/movie-ticket.jpg",
  },
  {
    id: 5,
    name: "Book",
    price: 15,
    image: "/products_images/book.jpg",
  },
  {
    id: 6,
    name: "Lobster Dinner",
    price: 45,
    image: "/products_images/lobster-dinner.jpg",
  },
  {
    id: 7,
    name: "Video Game",
    price: 60,
    image: "/products_images/video-game.jpg",
  },
  {
    id: 8,
    name: "Amazon Echo",
    price: 99,
    image: "/products_images/amazon-echo.jpg",
  },
  {
    id: 9,
    name: "Year of Netflix",
    price: 100,
    image: "/products_images/year-of-netflix.jpg",
  },
  {
    id: 10,
    name: "Air Jordans",
    price: 125,
    image: "/products_images/air-jordans.jpg",
  },
  {
    id: 11,
    name: "Airpods",
    price: 199,
    image: "/products_images/airpods.jpg",
  },
  {
    id: 12,
    name: "Gaming Console",
    price: 299,
    image: "/products_images/gaming-console.jpg",
  },
  {
    id: 13,
    name: "Drone",
    price: 350,
    image: "/products_images/drone.jpg",
  },
  {
    id: 14,
    name: "Smart Phone",
    price: 699,
    image: "/products_images/smartphone.jpg",
  },
  {
    id: 15,
    name: "Bike",
    price: 800,
    image: "/products_images/bike.jpg",
  },
  {
    id: 16,
    name: "Kitten",
    price: 1500,
    image: "/products_images/kitten.jpg",
  },
  {
    id: 17,
    name: "Puppy",
    price: 1500,
    image: "/products_images/puppy.jpg",
  },
  {
    id: 18,
    name: "Auto Rickshaw",
    price: 2300,
    image: "/products_images/auto-rickshaw.jpg",
  },
  {
    id: 19,
    name: "Horse",
    price: 2500,
    image: "/products_images/horse.jpg",
  },
  {
    id: 20,
    name: "Acre of farmland",
    price: 3000,
    image: "/products_images/acre-of-farmland.jpg",
  },
  {
    id: 21,
    name: "Desing Handbag",
    price: 5500,
    image: "/products_images/designer-handbag.jpg",
  },
  {
    id: 22,
    name: "Hot Tub",
    price: 6000,
    image: "/products_images/hot-tub.jpg",
  },
  {
    id: 23,
    name: "Luxury Wine",
    price: 7000,
    image: "/products_images/luxury-wine.jpg",
  },
  {
    id: 24,
    name: "Diamond Ring",
    price: 10000,
    image: "/products_images/diamond-ring.jpg",
  },
  {
    id: 25,
    name: "Jet Ski",
    price: 12000,
    image: "/products_images/jet-ski.jpg",
  },
  {
    id: 26,
    name: "Rolex",
    price: 15000,
    image: "/products_images/rolex.jpg",
  },
  {
    id: 27,
    name: "Ford F-150",
    price: 30000,
    image: "/products_images/ford-f-150.jpg",
  },
  {
    id: 28,
    name: "Tesla",
    price: 75000,
    image: "/products_images/tesla.jpg",
  },
  {
    id: 29,
    name: "Monster Truck",
    price: 150000,
    image: "/products_images/monster-truck.jpg",
  },
  {
    id: 30,
    name: "Ferrari",
    price: 250000,
    image: "/products_images/ferrari.jpg",
  },
  {
    id: 31,
    name: "Single Family Home",
    price: 300000,
    image: "/products_images/single-family-home.jpg",
  },
  {
    id: 32,
    name: "Gold Bar",
    price: 700000,
    image: "/products_images/gold-bar.jpg",
  },
  {
    id: 33,
    name: "McDonalds Franchise",
    price: 1500000,
    image: "/products_images/mcdonalds-franchise.jpg",
  },
  {
    id: 34,
    name: "Super Bowl Ad",
    price: 5250000,
    image: "/products_images/superbowl-ad.jpg",
  },
  {
    id: 35,
    name: "Yacht",
    price: 7500000,
    image: "/products_images/yacht.jpg",
  },
  {
    id: 36,
    name: "M1 Abrams Tank",
    price: 8000000,
    image: "/products_images/m1-abrams.jpg",
  },
  {
    id: 37,
    name: "Formula 1 Car",
    price: 15000000,
    image: "/products_images/formula-1-car.jpg",
  },
  {
    id: 38,
    name: "Apache Helicopter",
    price: 31000000,
    image: "/products_images/apache-helicopter.jpg",
  },
  {
    id: 39,
    name: "Mansion",
    price: 45000000,
    image: "/products_images/mansion.jpg",
  },
  {
    id: 40,
    name: "Make a Movie",
    price: 100000000,
    image: "/products_images/make-a-movie.jpg",
  },
  {
    id: 41,
    name: "Boeing 747",
    price: 148000000,
    image: "/products_images/boeing-747.jpg",
  },
  {
    id: 42,
    name: "Mona Lisa",
    price: 780000000,
    image: "/products_images/mona-lisa.jpg",
  },
  {
    id: 43,
    name: "Skyscraper",
    price: 850000000,
    image: "/products_images/skyscraper.jpg",
  },
  {
    id: 44,
    name: "Cruise Ship",
    price: 930000000,
    image: "/products_images/cruise-ship.jpg",
  },
  {
    id: 45,
    name: "NBA Team",
    price: 2120000000,
    image: "/products_images/nba-team.jpg",
  },
];

export default products;
