var randomResult;
var lost = 0;
var win = 0;
var score = 0;

var startAndResetGame = function () {

    $(".crystals").empty();

    randomResult = Math.floor(Math.random() * 90 + 30);

    $("#result").html(' ' + randomResult);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11 + 1);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal', "dataRandom": random
        });
        
        $(".crystals").append(crystal);
    }

    $("#score").html("TOTAL SCORE: " + score);
};

startAndResetGame();

$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('dataRandom'));

    score += num;
    console.log(score);

    $("#score").html(score);
    if (score > randomResult) {
        lost++;
        $("#losses").html("Losses: " + lost);
        score = 0;

        $("#score").html("TOTAL SCORE: " + score);

        startAndResetGame();
    }
    else if (score === randomResult) {
        win++;
        $("#wins").html("Wins: " + win);
        score = 0;

        startAndResetGame();
    }

});
