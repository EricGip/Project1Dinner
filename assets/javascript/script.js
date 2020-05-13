$(document).ready(function () {
  //================================================================= BUTTON CALLS =============================================================================
  $("#leftBtn").on("click", function () {
    getRandomMeal();
  })
  $("#middleBtn").on("click", function () {
    getRandomDrink();
  })
  //================================================================== FUNCTIONS PULLING RANDOM =====================================================
  function getRandomDrink() {
    $(".right-drink-recipe").empty();
    var randomDrinkURL =
      "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    $.ajax({
      url: randomDrinkURL,
      method: "GET"
    }).then(function (response) {
      console.log(response)
      var drinkName = response.drinks[0].strDrink;
      var drinkInstructions = response.drinks[0].strInstructions;
      console.log(drinkInstructions);
      // TO DO need to list out all the ingredients?
      //ingredientsList.push(response.drinks[0].strIngredient1);
      //ingredientsList.push(response.drinks[0].strIngredient2);
      //ingredientsList.push(response.drinks[0].strIngredient3);
      //ingredientsList.push(response.drinks[0].strIngredient4);
      //ingredientsList.push(response.drinks[0].strIngredient5);
      //instead of dot notation, just use [], add property as a string
      // (response.drinks[0] ["strIngredient" + i]) to concatenate
      //for loop for ingridient list
      var ingredientsList = [];
      for (i = 1; i < 15; i++) {
        if (response.drinks[0]["strIngredient" + i] && response.drinks[0]["strIngredient" + i].trim() !== "") {
          ingredientsList.push(response.drinks[0]["strIngredient" + i])
        };
      };
      console.log(ingredientsList)
      //for loop for measurement list
      var drinkMeasurements = [];
      for (i = 1; i < 20; i++) {
        if (response.drinks[0]["strMeasure" + i] && response.drinks[0]["strMeasure" + i].trim() !== "") {
          drinkMeasurements.push(response.drinks[0]["strMeasure" + i]);
        }
      };
      console.log(drinkMeasurements)
      var drinkImage = response.drinks[0].strDrinkThumb;
      //  var addFoodRecipe =
      var drinkTitle = $("<h2>You've got luck with " + drinkName + "</h2>");
      var drinkDirection = $("<p>" + drinkInstructions + "</p>");
      var drinkIngredients = $("<p>" + ingredientsList + "</p>");
      var drinkMeasurementsEl = $("<p>" + drinkMeasurements + "</p>")
      var drinkImageEl = $("<img>").attr("src", drinkImage);
      $(".right-drink-recipe").append(
        drinkTitle,
        drinkIngredients,
        drinkMeasurementsEl,
        drinkDirection,
        drinkImageEl,
      );
      //If they check alcoholic or not? -- recursion to call again
      //if (response.drinks[0].strAlcoholic === "Alcoholic") {
      //  getRandomDrink();
      //};
      // addFoodRecipe ()
    });
  }
  function getRandomMeal() {
    $(".left-food-recipe").empty();
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
        if (response.meals[0]["strIngredient" + i] && response.meals[0]["strIngredient" + i].trim() !== "") {
          mealIngredients.push(response.meals[0]["strIngredient" + i])
        };
      }
      console.log(mealIngredients);
      var mealMeasurements = [];
      for (i = 1; i < 20; i++) {
        // response.meals[0]["strMeasure" + i] && -- checks for NULL 
        // .trim() will get rid of any blanks spaces before and after
        if (response.meals[0]["strMeasure" + i] && response.meals[0]["strMeasure" + i].trim() !== "")
          mealMeasurements.push(response.meals[0]["strMeasure" + i]);
      }
      console.log(mealMeasurements);
      var mealInstructions = response.meals[0].strInstructions;
      console.log(mealInstructions);
      var mealTitleEl = $("<h2>Good Luck Making " + dishName + "</h2>");
      var mealInstructionsEl = $("<p>" + mealInstructions + "</p>");
      var mealIngredientsEl = $("<p>" + mealIngredients + "</p>");
      var mealMeasurementsEl = $("<p>" + mealMeasurements + "</p>");
      var mealThumbnailURLEl = $("<img>").attr("src", mealThumbnailURL);
      $(".left-food-recipe").append(
        mealTitleEl,
        mealIngredientsEl,
        mealMeasurementsEl,
        mealInstructionsEl,
        mealThumbnailURLEl,
      )
    });
  }
  function getMusicVideo() {
    var artists = [
      "rick_astley",
      "justin_bieber",
      "backstreet_boys",
      "taylor_swift",
      "ariana_grande",
      "drake",
      "kanye_west",
      "kings_of_leon",
      "Metallica",
      "disturbed",
      "nirvana",
      "post_malone",
    ];
    // randomly picks number between 1 - 15.
    artistPick = Math.floor(Math.random() * 12)
    console.log(artistPick)
    // getting artist ID from artist name 
    $.ajax({
      url: "https://theaudiodb.com/api/v1/json/1/search.php?s=" + artists[artistPick],
      method: "GET"
    }).then(function (response) {
      var artistId = response.artists[0].idArtist;
      console.log(artistId)
      $.ajax({
        url: "https://theaudiodb.com/api/v1/json/1/mvid.php?i=" + artistId,
        method: "GET"
      }).then(function (response) {
        var youtubeLinks = [];
        for (i = 0; i < 3; i++) {
          youtubeLinks.push(response.mvids[i].strMusicVid);
        };
        console.log(youtubeLinks)
      });
    });
  };
  getMusicVideo();
});