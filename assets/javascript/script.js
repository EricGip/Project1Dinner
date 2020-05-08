$(document).ready(function () {

    function getRandomDrink() {
      var randomDrinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      $.ajax({
        url: randomDrinkURL,
        method: "GET"
      }).then(function (response) {
        var drinkName = response.drinks[0].strDrink;
        alert(drinkName)
  
        //If they check alcoholic or not? -- recursion to call again
        //if (response.drinks[0].strAlcoholic === "Alcoholic") {
        //  getRandomDrink();
        //};
  
        var drinkInstructions = response.drinks[0].strInstructions;
        alert(drinkInstructions)
  
        // TO DO need to list out all the ingredients? 
        var ingredientsList = []
        //ingredientsList.push(response.drinks[0].strIngredient1);
        //ingredientsList.push(response.drinks[0].strIngredient2);
        //ingredientsList.push(response.drinks[0].strIngredient3);
        //ingredientsList.push(response.drinks[0].strIngredient4);
        //ingredientsList.push(response.drinks[0].strIngredient5);
  
        //instead of dot notation, just use [], add property as a string 
        // (response.drinks[0] ["strIngredient" + i]) to concatenate 
        for (i=1; i < 15; i++) {
          ingredientsList.push(response.drinks[0] ["strIngredient" + i])
        }
  
        alert(ingredientsList);
      });
    };
  
    getRandomDrink();
  
  
  });
  