let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/summer-cicd-mern",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const restaurantSeed = [
  {
    name: "Olive Garden",
    address: "1313 Mockingbird Lane",
    phone: "888-888-8888",
    cuisine: "Italian",
  },
  {
    name: "Red Lobster",
    address: "742 Evergreen Terrace",
    phone: "888-888-8887",
    cuisine: "Seafood",
  },
  {
    name: "Texas Roadhouse",
    address: "508 Saint Cloud Road",
    phone: "888-888-8886",
    cuisine: "Steak",
  },
];

db.Restaurant.deleteMany({}).then(() => {
  db.Restaurant.collection
    .insertMany(restaurantSeed)
    .then((data) => {
      console.log(data);
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
});
