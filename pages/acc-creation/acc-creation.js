$(document).ready(function(){
    $(".selection select").change(function() {
        if(( $('option:selected') )) {
            $(".selection > label").css({
                "left": "0",
                "color": "#228AE3",
                "font-size": "0.875rem"
            })
        }
    });
});