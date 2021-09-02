let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {return this._courses.appetizers;},
  get mains() {return this._courses.mains;},
  get desserts() {return this._courses.desserts;},
  set appetizers(appysSelect) {this._courses.appetizers = appysSelect;}, 
  set mains(mainsSelect) {this._courses.mains = mainsSelect;},
  set desserts(dessertsSelect) {this._courses.desserts = dessertsSelect;},
  get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,};
  },
  addDishToCourse: function (courseName, dishName, dishPrice) {
    let dish = {};
    dish.name = dishName;
    dish.price = dishPrice;
    courseName in this.courses ?  
      this[courseName].push(dish) : 
      console.log(`Error: Unable to add dish. '${courseName}' is not a valid course.`);
  },
  getRandomDishFromCourse: function (courseName){
    let dishes = this.courses[courseName];
    randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal: function () {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is an appetizer of ${appetizer.name}, a main of ${main.name}, and a dessert of ${dessert.name}. The total of this meal will be ${totalPrice.toFixed(2)}`;
  }
};

menu.addDishToCourse('appetizers', 'Onion Rings', 3.55);
menu.addDishToCourse('appetizers', 'Shrimp', 4.85);
menu.addDishToCourse('appetizers', 'Calamari', 5.25);
menu.addDishToCourse('mains', 'Burger', 8.95);
menu.addDishToCourse('mains', 'Steak', 12.15);
menu.addDishToCourse('mains', 'Chicken Breast', 10.05);
menu.addDishToCourse('desserts', 'Choclate', 7.15);
menu.addDishToCourse('desserts', 'Cake', 6.35);
menu.addDishToCourse('desserts', 'Ice Cream', 4.35);


// test after step 11 and leave it to test last step and show a meal.
console.log(menu.generateRandomMeal());

// test after step 10
// console.log(menu.getRandomDishFromCourse('appetizers'));

// test after step 8
// menu.addDishToCourse('appetizers', 'escargo', 4.50);
// console.log(menu._courses.appetizers);

// test I did after step 6, output was not what I wanted but I'll continue anyway.
// console.log(menu.courses);
// output: { _appetizers: [ 'testAppy' ],
//  _mains: [ 'testMains' ],
//  _desserts: [ 'testDesserts' ],
//  appetizers: [Getter/Setter],
//  mains: [Getter/Setter],
//  desserts: [Getter/Setter] }

// random tests I did after step 4
// menu._courses.desserts = ['testDessertsChange']; 
// console.log(menu._courses.desserts);
