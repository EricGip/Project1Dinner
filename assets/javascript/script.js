$(document).ready(function () {
  function getRandomDrink() {
    var randomDrinkURL =
      "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    $.ajax({
      url: randomDrinkURL,
      method: "GET"
    }).then(function (response) {
      var drinkName = response.drinks[0].strDrink;
      var drinkInstructions = response.drinks[0].strInstructions;
      console.log(drinkInstructions);
      // TO DO need to list out all the ingredients?
      var ingredientsList = [];
      //ingredientsList.push(response.drinks[0].strIngredient1);
      //ingredientsList.push(response.drinks[0].strIngredient2);
      //ingredientsList.push(response.drinks[0].strIngredient3);
      //ingredientsList.push(response.drinks[0].strIngredient4);
      //ingredientsList.push(response.drinks[0].strIngredient5);
      //instead of dot notation, just use [], add property as a string
      // (response.drinks[0] ["strIngredient" + i]) to concatenate
      for (i = 1; i < 15; i++) {
        if (response.drinks[0]["strIngredient" + i] !== null) {
          ingredientsList.push(response.drinks[0]["strIngredient" + i])
        };
      };
      console.log(ingredientsList);
      console.log(drinkName);
      //  var addFoodRecipe =
      var drinkTitle = $("<h2>You've got luck with " + drinkName + "</h2>");
      var drinkDirection = $("<p>" + drinkInstructions + "</p>");
      var drinkIngredients = $("<p>" + ingredientsList + "</p>");
      $(".right-drink-recipe").append(
        drinkTitle,
        drinkDirection,
        drinkIngredients
      );
      //If they check alcoholic or not? -- recursion to call again
      //if (response.drinks[0].strAlcoholic === "Alcoholic") {
      //  getRandomDrink();
      //};
      // addFoodRecipe ()
    });
  }
  getRandomDrink();
  function getRandomMeal() {
    var randomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php";
    $.ajax({
      url: randomMealURL,
      method: "GET"
    }).then(function (response) {
      var dishName = response.meals[0].strMeal;
      console.log(dishName);
      var mealThumbnailURL = response.meals[0].strMealThumb;
      console.log(mealThumbnailURL);
      var mealIngredients = [];
      for (i = 1; i < 20; i++) {
        if (response.meals[0]["strIngredient" + i] !== "") {
          mealIngredients.push(response.meals[0]["strIngredient" + i])
        };
      }
      console.log(mealIngredients);
      var mealMeasurements = [];
      for (i = 1; i < 20; i++) {
        if (response.meals[0]["strMeasure" + i] !== "")
          mealMeasurements.push(response.meals[0]["strMeasure" + i]);
      }
      console.log(mealMeasurements);
      var mealInstructions = response.meals[0].strInstructions;
      console.log(mealInstructions);
    });
  }
  getRandomMeal();
});