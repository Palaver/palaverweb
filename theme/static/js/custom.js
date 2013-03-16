$(document).ready(function() {
    function resizeText(){
        var spanHeight = $('#teaser span').height();
        var headerHeight = $('#teaser h1').height();

        if (spanHeight < 105 && headerHeight < 210) {
            $('#teaser span').css({"font-size" : ((spanHeight/73) * 34), "margin-bottom" : ((spanHeight/150)*105)});
            $('#teaser h1').css({"font-size" : ((headerHeight/52) * 46)});
        }
    }

    $(window).resize(function(){
        resizeText();
    });

    resizeText();

    $('#chooser li').mouseenter(function(e) {
        var image = $(this).attr('data-image');

        if (image !== $('#chooser-image').attr('src')) {
            $('#chooser-image').fadeOut(function() {
                $(this).attr('src', image);
                $(this).fadeIn();
            });
        }
    });
});
