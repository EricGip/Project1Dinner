$(document).ready(function(){

    function getRandomDrink(){
        var randomDrinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        $.ajax({
            url: randomDrinkURL,
            method: "GET"
        }).then(function(response) {
            var drinkName = response.strDrink
            console.log(drinkName)
        })
    }

});
