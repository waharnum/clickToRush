$(document).ready(function () {

    var currentOffset = 0;
    var maxOffset = -1900;

    var rushQuotes = [
        "We're to be rewarded at your whim, then?",
        "The ship is powered by the stars themselves. Solar powered, quite literally. There is no other explanation.",
        "Oh, well, it's *not* been a pleasure knowing you.",
        "Oh no, we most definitely all would be dead had I not put certain limits in place. I also arranged for the alarms and warnings to go off regardless. A bit of theater, always nice.",
        "You, the university, the clouds in the sky, all just a dream, a distant memory, and one I'd really rather went away.",
        "Ascension. It's a process whereby consciousness converts to energy and no longer requires a physical form.",
        "But I can tell you that fear, well, it's just one of those things in this world that proves beyond a shadow of a doubt that you're truly alive.",
        "For a moment there I thought we were in trouble",
        "You think just because you were born poor, that gives you the right to be angry at the world! How pathetic!",
        "My father worked in the shipyards in Glasgow! I earned a scholarship to Oxford while I was working two jobs! I have earned the right to make decisions without explaining myself to you or anyone else!",
        "I refuse to be held responsible for this situation!",
        "Solving the issues of dialling the ninth chevron. I'll devote two and a half years of my life to that. Meanwhile, my wife is gonna spend her dying days alone while I'm off, out, trying to solve that little problem.",
        "I always had it in me, to make the hard decisions. I have reasons. Good reasons.",
        "I warn you, most people find these rather bitter.",
        "Are you familiar with the cosmic microwave background radiation?",
        "We're talking about a mystery rooted in the foundation of reality, a puzzle with pieces scattered across the length and breadth of the universe itself.",
        "You know we grew up taught to believe that everyone's equal. That you are no better than anyone else – Of course that's a lie. Some are better than others. And there are those who recognize what makes them better and are able to exploit that to succeed.",
        "See what you can do when you apply yourself?",
        "Oh, bloody hell! We're all doomed!",
        "Well, we can't run, we can't hide. We'll have to fight."
    ];

    var getRandomInt = function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  };

    var getQuote = function () {
        var quotesLength = rushQuotes.length;
        var randonNum = getRandomInt(0, quotesLength-1);
        return rushQuotes[randonNum];
    };

    var animateRush = function () {
        var rush = $(".rushContainer");
        var bgPos = rush.css("background-position", function() {
            currentOffset = currentOffset - 100;
            var position = currentOffset.toString() + "vw 50%";
            console.log(position);
            return position;
        });
    };

    var animationTimer = function () {
        setTimeout(function() {
            animateRush();
            if(currentOffset > maxOffset) {
                animationTimer();
            }  else {
                displayText();
            }
        }, 75);
    };

    var displayText = function () {
        console.log("display text");
        var rush = $(".rushContainer");
        rush.html(getQuote());
    };

    var restartAnimation = function () {
        currentOffset = 0;
        var rush = $(".rushContainer");
        rush.empty();
        animationTimer();
    };

    var rush = $(".rushContainer");
    rush.click(function () {
        restartAnimation();
    });

});
