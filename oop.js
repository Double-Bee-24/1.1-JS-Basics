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

// Universal method which can be both getter and setter
AbstractProduct.prototype.getSetValue = function (propertyName, value) {
  if (arguments.length === 1) {
    return this[propertyName];
  } else if (arguments.length === 2) {
    this[propertyName] = value;
  }
};

// const date = new Date(2024, 9, 10, 12, 36, 15);
// const reviews = [
//   (firstReview = {
//     ID: 1001,
//     author: "John",
//     date: new Date(2020, 1, 25, 20, 10, 23),
//     comment: "Cool tomatoes",
//     rating: {
//       service: 5,
//       price: 4,
//       value: 4.5,
//       quality: 5,
//     },
//   }),
// ];

// let someProduct = new AbstractProduct(
//   123,
//   "Tomatoes",
//   "Tasty vegetables",
//   79.99,
//   "Tomatinio",
//   ["Small", "Medium", "Large"],
//   "Medium",
//   12,
//   date,
//   reviews,
//   ["firstImg", "secondImg"]
// );

function Clothes(
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
  images,
  material,
  color
) {
  AbstractProduct.call(
    this,
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
  );
  this.material = material;
  this.color = color;
}

Clothes.prototype = Object.create(AbstractProduct.prototype);
Clothes.prototype.constructor = Clothes;

Clothes.prototype.getMaterial = function () {
  return this.material;
};
Clothes.prototype.setMaterial = function (materialToSet) {
  this.material = materialToSet;
};

Clothes.prototype.getColor = function () {
  return this.color;
};
Clothes.prototype.setColor = function (colorToSet) {
  this.color = colorToSet;
};

Clothes.prototype.getReviewById = function (reviewId) {
  return this.reviews.find((item) => item.ID === reviewId);
};

Clothes.prototype.getImage = function (imageToFind) {
  return images[imageToFind] || images[0];
};

Clothes.prototype.addSize = function (newSize) {
  this.sizes.push(newSize);
};

Clothes.prototype.deleteSize = function (sizeToDelete) {
  this.sizes = this.sizes.filter((item) => item !== sizeToDelete);
};

Clothes.prototype.addReview = function (newReview) {
  this.reviews.push(newReview);
};

Clothes.prototype.deleteReview = function (reviewToDeleteId) {
  this.reviews = this.reviews.filter((item) => item.id !== reviewToDeleteId);
};

Clothes.prototype.getAvarageRating = function () {
  let rating = 0;
  for (const review of this.reviews) {
    const avarageRating =
      Object.values(review.rating).reduce((acc, current) => acc + current, 0) /
      4;
    rating += avarageRating;
  }
  return (
    rating / this.reviews.length ||
    "This product is not rated yet. Be the first!"
  );
};

Clothes.prototype.searchProducts = function (products, search) {
  const allMatches = [];

  for (let product of products) {
    if (
      product.getName().includes(search) ||
      product.getDescription().includes(search)
    ) {
      allMatches.push(product);
    }
  }

  return allMatches;
};

// sortRule can be 'name', 'ID', 'price'
Clothes.prototype.sortProducts = function (products, sortRule) {
  if (sortRule === "ID") {
    return products.sort((a, b) => a.getID() - b.getID());
  } else if (sortRule === "name") {
    return products.sort((a, b) => a.getName().localCompare(b.getName()));
  } else if (sortRule === "price") {
    return products.sort((a, b) => a.getPrice() - b.getPrice());
  }
  return "This sorting rule is not supported";
};

function Electronics(
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
  images,
  warranty,
  power
) {
  AbstractProduct.call(
    this,
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
  );
  this.warranty = warranty;
  this.power = power;
}

Electronics.prototype = Object.create(AbstractProduct.prototype);
Electronics.prototype.constructor = Electronics;

Electronics.prototype.getWarranty = function () {
  return this.warranty;
};
Electronics.prototype.setWarranty = function (warrantyToSet) {
  this.warranty = this.warranty;
};

Electronics.prototype.getPower = function () {
  return this.power;
};
Electronics.prototype.setPower = function (powerToSet) {
  this.power = powerToSet;
};

Electronics.prototype.getReviewById = function (reviewId) {
  return this.reviews.find((item) => item.ID === reviewId);
};

Electronics.prototype.getImage = function (imageToFind) {
  return images[imageToFind] || images[0];
};

Electronics.prototype.addSize = function (newSize) {
  this.sizes.push(newSize);
};

Electronics.prototype.deleteSize = function (sizeToDelete) {
  this.sizes = this.sizes.filter((item) => item !== sizeToDelete);
};

Electronics.prototype.addReview = function (newReview) {
  this.reviews.push(newReview);
};

Electronics.prototype.deleteReview = function (reviewToDeleteId) {
  this.reviews = this.reviews.filter((item) => item.id !== reviewToDeleteId);
};

Electronics.prototype.getAvarageRating = function () {
  let rating = 0;
  for (const review of this.reviews) {
    const avarageRating =
      Object.values(review.rating).reduce((acc, current) => acc + current, 0) /
      4;
    rating += avarageRating;
  }
  return (
    rating / this.reviews.length ||
    "This product is not rated yet. Be the first!"
  );
};

Electronics.prototype.searchProducts = function (products, search) {
  const allMatches = [];

  for (let product of products) {
    if (
      product.getName().includes(search) ||
      product.getDescription().includes(search)
    ) {
      allMatches.push(product);
    }
  }

  return allMatches;
};

// sortRule can be 'name', 'ID', 'price'
Electronics.prototype.sortProducts = function (products, sortRule) {
  if (sortRule === "ID") {
    return products.sort((a, b) => a.getID() - b.getID());
  } else if (sortRule === "name") {
    return products.sort((a, b) => a.getName().localCompare(b.getName()));
  } else if (sortRule === "price") {
    return products.sort((a, b) => a.getPrice() - b.getPrice());
  }
  return "This sorting rule is not supported";
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

let someProduct = new Electronics(
  923,
  "ASUS",
  "Studying laptop",
  28999.99,
  "ASUS",
  ["Small", "Medium", "Large"],
  "Medium",
  12,
  date,
  reviews,
  ["firstImg", "secondImg"]
);

let someProduct2 = new Electronics(
  123,
  "Lenovo",
  "Gaming laptop",
  29999.99,
  "Lenovo",
  ["Small", "Medium", "Large"],
  "Medium",
  12,
  date,
  reviews,
  ["firstImg", "secondImg"]
);

// console.log(someProduct.sortProducts([someProduct, someProduct2], "ID"));
// console.log(someProduct.getID());
