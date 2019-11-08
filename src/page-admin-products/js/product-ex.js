class Footwear {
  constructor(obj) {
    this.type = obj.type;
    this.gender = obj.gender;
    this.material = obj.material;
    this.brandName = obj.brandName;
    this.name = obj.modelName;
    this.size = obj.size;
    this.image = obj.image;
    this.description = obj.description;
    this.price = obj.price;
    this.availability = obj.availability;
    this.popular = false;
    this.purchases = 0;
  }
}

// Footwear.prototype.changePrice = function(value) {
//   this.price = value;
// };

// Footwear.prototype.viewsIncrement = function() {
//   this.views += 1;
// };

// Footwear.prototype.purchasesIncrement = function() {
//   this.purchases += 1;
// };

// Footwear.prototype.postingProduct = function(quantity) {
//   this.availability = this.availability + quantity;
// };

// Footwear.prototype.сscriptureProduct = function(quantity) {
//   if (availability - quantity >= 0) {
//     this.availability = this.availability - quantity;
//   } else {
//     alert('not enough goods in stock!');
//   }
// };
