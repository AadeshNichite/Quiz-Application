$(document).ready(function(){
    $(".mainPage").show();
    $(".secondPage").hide();
    $("#getStart").click(function(){
        $(".mainPage").hide();
        $(".secondPage").show();
    });
});