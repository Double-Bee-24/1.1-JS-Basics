function AbstractProduct(
  ID,
  name,
  description,
  price,
  brand,
  sizes,
  activeSize,
  quantity,
  date,
  reviews,
  images
) {
  this.ID = ID;
  this.name = name;
  this.description = description;
  this.price = price;
  this.brand = brand;
  this.sizes = sizes;
  this.activeSize = activeSize;
  this.quantity = quantity;
  this.date = date;
  this.reviews = reviews;
  this.images = images;
}

AbstractProduct.prototype.getID = function () {
  return this.ID;
};
AbstractProduct.prototype.setID = function (IDToSet) {
  this.ID = IDToSet;
};
AbstractProduct;

AbstractProduct.prototype.getName = function () {
  return this.name;
};
AbstractProduct.prototype.setName = function (nameToSet) {
  this.name = nameToSet;
};

AbstractProduct.prototype.getDescription = function () {
  return this.description;
};
AbstractProduct.prototype.setDescription = function (descriptionToSet) {
  this.description = descriptionToSet;
};

AbstractProduct.prototype.getPrice = function () {
  return this.price;
};
AbstractProduct.prototype.setPrice = function (priceToSet) {
  this.price = priceToSet;
};

AbstractProduct.prototype.getBrand = function () {
  return this.brand;
};
AbstractProduct.prototype.setBrand = function (brandToSet) {
  this.brandToSet = brandToSet;
};

AbstractProduct.prototype.getQuantity = function () {
  return this.quantity;
};
AbstractProduct.prototype.setQuantity = function (quantityToSet) {
  quantity = quantityToSet;
};

AbstractProduct.prototype.getDate = function () {
  return this.date;
};
AbstractProduct.prototype.setDate = function (dateToSet) {
  this.date = dateToSet;
};

AbstractProduct.prototype.getReviews = function () {
  return this.reviews;
};
AbstractProduct.prototype.setReviews = function (reviewsToSet) {
  this.reviews = reviewsToSet;
};

AbstractProduct.prototype.getImages = function () {
  return this.images;
};
AbstractProduct.prototype.setImages = function (imagesToSet) {
  this.images = imagesToSet;
};

// new methods
AbstractProduct.prototype.getFullInformation = function () {
  for (let property in this) {
    if (typeof this[property] !== "function")
      console.log(`${property}: ${this[property]}\n`);
  }
};

AbstractProduct.prototype.getPriceForQuantity = function (number) {
  return number * this.price;
};

const date = new Date(2024, 9, 10, 12, 36, 15);
const reviews = [
  (firstReview = {
    ID: 1001,
    author: "John",
    date: new Date(2020, 1, 25, 20, 10, 23),
    comment: "Cool tomatoes",
    rating: {
      service: 5,
      price: 4,
      value: 4.5,
      quality: 5,
    },
  }),
];

let someProduct = new AbstractProduct(
  123,
  "Tomatoes",
  "Tasty vegetables",
  79.99,
  "Tomatinio",
  ["Small", "Medium", "Large"],
  "Medium",
  12,
  date,
  reviews,
  ["firstImg", "secondImg"]
);
