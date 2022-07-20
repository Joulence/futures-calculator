$(document).ready(function(){
    $("#long-label").click(function (event) {
        $(".input-submit").prop('disabled', false);
    });

    $("#short-label").click(function (event) {
        $(".input-submit").prop('disabled', false);
    });
    
  
    $("#long").click(
        function () {
            $("#long-label").css("background", "#0ECB81");
            $("#long-label").css("color", "#fff");
            $("#short-label").css("background", "");
            $("#short-label").css("color", "");
        }
    )

    $("#short").click(
        function () {
            $("#long-label").css("background", "");
            $("#long-label").css("color", "");
            $("#short-label").css("background", "#F6465D");
            $("#short-label").css("color", "#fff");
        }
    )
 });