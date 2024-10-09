function Product(
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
  this.getID = function () {
    return this.ID;
  };
  this.setID = function (idToSet) {
    this.id = idToSet;
  };

  this.name = name;
  this.getName = function () {
    return this.name;
  };
  this.setName = function (nameToSet) {
    this.name = nameToSet;
  };

  this.description = description;
  this.getDescription = function () {
    return this.description;
  };
  this.setDescription = function (descriptionToSet) {
    this.description = descriptionToSet;
  };

  this.price = price;
  this.getPrice = function () {
    return this.price;
  };
  this.setPrice = function (priceToSet) {
    this.price = priceToSet;
  };

  this.brand = brand;
  this.getBrand = function () {
    return this.brand;
  };
  this.setBrand = function (brandToSet) {
    this.brandToSet = brandToSet;
  };

  this.sizes = sizes;
  this.getSizes = function () {
    return this.sizes;
  };
  this.setSizes = function (sizesToSet) {
    this.sizes = sizesToSet;
  };

  this.activeSize = activeSize;
  this.getActiveSize = function () {
    return this.activeSize;
  };
  this.setActiveSize = function (activeSizeToSet) {
    this.activeSize = activeSizeToSet;
  };

  this.quantity = quantity;
  this.getQuantity = function () {
    return this.quantity;
  };
  this.setQuantity = function (quantityToSet) {
    quantity = quantityToSet;
  };

  this.date = date;
  this.getDate = function () {
    return this.date;
  };
  this.setDate = function (dateToSet) {
    this.date = dateToSet;
  };

  this.reviews = reviews;
  this.getReviews = function () {
    return this.reviews;
  };
  this.setReviews = function (reviewsToSet) {
    this.reviews = reviewsToSet;
  };

  this.images = images;
  this.getImages = function () {
    return this.images;
  };
  this.setImages = function (imagesToSet) {
    this.images = imagesToSet;
  };

  this.getReviewById = function (reviewId) {
    return this.reviews.find((item) => item.ID === reviewId);
  };

  this.getImage = function (imageToFind) {
    return images[imageToFind] || images[0];
  };

  this.addSize = function (newSize) {
    this.sizes.push(newSize);
  };

  this.deleteSize = function (sizeToDelete) {
    this.sizes = this.sizes.filter((item) => item !== sizeToDelete);
  };

  this.addReview = function (newReview) {
    this.reviews.push(newReview);
  };

  this.deleteReview = function (reviewToDeleteId) {
    this.reviews = this.reviews.filter((item) => item.id !== reviewToDeleteId);
  };

  this.getAvarageRating = function () {
    let rating = 0;
    for (const review of this.reviews) {
      const avarageRating =
        Object.values(review.rating).reduce(
          (acc, current) => acc + current,
          0
        ) / 4;
      rating += avarageRating;
    }
    return (
      rating / this.reviews.length ||
      "This product is not rated yet. Be the first!"
    );
  };
}

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

let product = new Product(
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

let secondProduct = new Product(
  345,
  "Cucumbers",
  "Tasty green vegetables",
  64.99,
  "El Cucambero",
  ["Small", "Medium", "Large"],
  "Small",
  8,
  date,
  reviews,
  ["firstImg", "secondImg"]
);

function searchProducts(products, search) {
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
}

// sortRule can be 'name', 'ID', 'price'
function sortProducts(products, sortRule) {
  if (sortRule === "ID") {
    return products.sort((a, b) => a.getID() - b.getID());
  } else if (sortRule === "name") {
    return products.sort((a, b) => a.getName().localCompare(b.getName()));
  } else if (sortRule === "price") {
    return products.sort((a, b) => a.getPrice() - b.getPrice());
  }
  return "This sorting rule is not supported";
}

console.log(sortProducts([product, secondProduct], "name"));
