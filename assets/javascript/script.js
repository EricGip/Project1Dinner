$(document).ready(function () {

  //================================================================= BUTTON CALLS =============================================================================

  $("#leftBtn").on("click", function () {

    getRandomMeal();
    getRandomDrink();

  })

  // $("#middleBtn").on("click", function () {

  //   getRandomDrink();

  // })

  $("#rightBtn").on("click", function () {

    getMusicVideo();

  })

  //================================================================== FUNCTIONS PULLING RANDOM =====================================================

  //-------------------------- Random Drink Function ---------------------------
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

      var drinkImageEl = $("<img>").attr("src", drinkImage).css("width", "450px");

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

  //------------------------------ Random Meal Function -------------------------------
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

      var mealThumbnailURLEl = $("<img>").attr("src", mealThumbnailURL).css("width", "450px");

      $(".left-food-recipe").append(
        mealTitleEl,
        mealIngredientsEl,
        mealMeasurementsEl,
        mealInstructionsEl,
        mealThumbnailURLEl,
      )

    });

  }

  //--------------------------- Random Music Video Function ----------------------
  function getMusicVideo() {

    $("#musicDiv").empty();

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
      "sade",
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

      var artistName = response.artists[0].strArtist;

      var songGenre = response.artists[0].strGenre;

      console.log(artistId)

      $.ajax({
        url: "https://theaudiodb.com/api/v1/json/1/mvid.php?i=" + artistId,
        method: "GET"

      }).then(function (response) {

       // need to 
        //var youtubeLinks = [];

        // for (i = 0; i < 3; i++) {
        //  youtubeLinks.push(response.mvids[i].strMusicVid);
        //}

        var youtubeLinks = response.mvids[0].strMusicVid

        youtubeLinks = youtubeLinks.replace("watch", "embed")
        youtubeLinks = youtubeLinks.replace("http", "https")


        console.log(youtubeLinks);
        
        console.log(artistName)

        // strArtist - artistId
        // strGenre - songGenre

        // strTrack - songTrack
        var songTrack = response.mvids[0].strTrack

        // strTrackThumb - trackThumb
        var trackThumb = response.mvids[0].strTrackThumb
        // strMusicVid -- youtubeLinks

        // DOM Elements
        var trackThumbURLEl = $("<img>")
        .attr("src", trackThumb)
        .css("width", "75px")
        .css("height", "75px")

        var songTitleEl = $("<h2>Maybe you'll like: " + songTrack + " " + "</h2>");

        var songGenreEl = $("<p>" + "<h3> Genre: " + songGenre +  "</h3>" + "</p>");

        var artistNameEl = $("<p>" + "<h3> Artist: " + artistName + "</h3>" + "</p>")

        var musicVideoEl = $("<iframe>");
        
        $(songTitleEl).append(
          trackThumbURLEl
        )

        musicVideoEl.attr("src", youtubeLinks)
        .attr("frameborder", 0)
        .attr("allow", "accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture")
        .attr("allowfullscreen");

        $("#musicDiv").append(
          songTitleEl,
          songGenreEl,
          artistNameEl,
          musicVideoEl
        );

      });

    });

  };
});