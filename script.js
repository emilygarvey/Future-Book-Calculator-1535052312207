$(".submit").click(function() {
    $(".container").hide();

});

$(".submit").click(function() {
        $(".resultsOne").show(".magic");
}); 
        
$(".go").click(function() {
    var name = $(".inputOne").val();
    var books = $(".inputTwo").val(); 
    var character = $(".inputThree").val();
        $(".resultsOne").slideUp(".magic");
        $(".resultsTwo").append("Wow, " + name + "! By the year 2050, you will have read " + (books*32) + " more books! " + character + " would be soooooo impressed!");
        $(".resultsTwo").show(".gif");
}); 