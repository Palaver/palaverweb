$(document).ready(function() {
    function resizeText(){
        var spanHeight = $('#teaser span').height();
        var headerHeight = $('#teaser h1').height();

        if (spanHeight < 105 && headerHeight < 210) {
            $('#teaser span').css({"font-size" : ((spanHeight/73) * 34), "margin-bottom" : ((spanHeight/150)*105)});
            $('#teaser h1').css({"font-size" : ((headerHeight/52) * 46)});
        }

        if ($('body').width() < 980) {
            $('#overlay').css({"display" : "block"});
        }
        else {
            $('#overlay').css({"display" : "none"});
        }
    }

    $(window).resize(function(){
        resizeText();
    });

    resizeText();
});
