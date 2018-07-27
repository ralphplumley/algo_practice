/*

input:
  dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
            ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
            ["Quesadilla", "Chicken", "Cheese", "Sauce"],
            ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]

output:

  groupingDishes(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
                            ["Salad", "Salad", "Sandwich"],
                            ["Sauce", "Pizza", "Quesadilla", "Salad"],
                            ["Tomato", "Pizza", "Salad", "Sandwich"]]
*/

let dishes = [["Salad","Tomato","Cucumber","Salad","Sauce"], 
["Pizza","Tomato","Sausage","Sauce","Dough"], 
["Quesadilla","Chicken","Cheese","Sauce"], 
["Sandwich","Salad","Bread","Tomato","Cheese"]];

function groupingDishes(dishes) {
  let arr = dishes;
  let ingredientsHash = {};

  arr.forEach((dish) => {
    let dishName = dish[0];
    
    for (var i = 1; i < dish.length; i++) {
      let ingredient = dish[i];
      if (!ingredientsHash[ingredient]) {
        ingredientsHash[ingredient] = [dishName];
      } else {
        ingredientsHash[ingredient].push(dishName);
      }
    }
  });

  // remove entries with less than two dishes
  for (key in ingredientsHash) {
    if (ingredientsHash[key].length < 2) {
      delete ingredientsHash[key]
    }
  }
  
  // construct output array
  let output = [];
  let dish = [];
  
  for (key in ingredientsHash) {
    ingredientsHash[key].forEach((ingredient) => {
      dish.push(ingredient);
    });
    dish.sort();
    dish.unshift(key);
    output.push(dish);
    dish = [];
  };
  
  // return sorted list of groups
  // return output.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0]);

  output = output.sort(function(a,b) {
    return a[0] < b[0] ? -1 : a[0] > b[0];
  });

  return output;
}

console.log(groupingDishes(dishes));