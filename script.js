

function randomePizza(arr){
    var end = arr.length -1;
    var d20 = Math.floor(Math.random()*end);
    return arr[d20];
}

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var crust = ["thin", "deep dish", "regular", "hand tossed"]
var sauce = ["traditional", "marinara", "white"]
var cheese= ["pepper jack", "mozzarella", "cheddar"]
var topping = ["none", "feta", "olives", "mushrooms"]

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"])
var p2 = pizzaOven("hand tossed", "marinare", "mozzarella", ["feta", "mushrooms", "olives", "onions"])
var p3 = pizzaOven("thin crust", "marinara", "pepper jack", ["black olives", "banana peppers"])
var p4 = pizzaOven("regular", "traditional", "mozzarella", ["none"])
var p5 = pizzaOven(randomePizza(crust), randomePizza(sauce), randomePizza(cheese), [randomePizza(topping), randomePizza(topping)])

console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
console.log(p5)
