$(".submit").click(function() {
    $(".container").hide();
});

$(".submit").click(function() {
        $(".resultsOne").show(".magic");
}); 
        
$(".go").click(function() {
    var name = $(".inputOne").val();
    var nameUpper = name.toUpperCase();
    var books = $(".inputTwo").val(); 
    var booksUpper = books.toUpperCase();
    var character = $(".inputThree").val();
    var characterUpper = character.toUpperCase();
    if (books > 6)
        {
        $(".resultsOne").slideUp(".magic");
        $(".resultsTwo").append("Wow, " + nameUpper + "! By the year 2050, you will have read " + (books*32) + " more books! " + characterUpper + " would be soooooo impressed!");
        $(".resultsTwo").show(".gif");
        }
    else if (isNaN(books)) {
        $(".resultsOne").slideUp(".magic");
        $(".resultsTwo").append("Very funny, " + nameUpper + "! " + booksUpper + " is not a number that I can calculate. Consult " + characterUpper + " and try again."); 
        $(".resultsTwo").show(".gif");
    }  
    else {
        $(".resultsOne").slideUp(".magic");
        $(".resultsTwo").append("Booooo, " + nameUpper + "! By the year 2050, you will have ONLY read " + (books*32) + " more books! You are a disappointment to " + characterUpper + "!");
        $(".resultsTwo").show(".gif");
        }
}); 