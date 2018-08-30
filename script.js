$(".inputOne").blur(function()          //whenever you click off an input element
{                   
    if( !$(this).val() ) {                      //if it is blank. 
         alert('empty');    
    }
});

$(".submit").click(function() {
    if ($.trim($(".inputOne").val()) === "" || $.trim($(".inputTwo").val()) === "" || $.trim($(".inputThree").val()) === "") {
        alert('you did not fill out all of the fields');
        return false;
    }
    else {
        $(".container").hide();
        $(".resultsOne").show(".magic");
}
}); 
        
$(".go").click(function() {
    var name = $(".inputOne").val();
    var books = $(".inputTwo").val(); 
    var character = $(".inputThree").val();
    var booksUpper = books.charAt(0).toUpperCase() + books.substr(1);
    character = character.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    name = name.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    if (books > 6)
        {
        $(".resultsOne").slideUp(".magic");
        $(".resultsWow").append("Wow, " + name + "! By the year 2050, you will have read " + (books*32) + " more books! " + character + " would be soooooo impressed!");
        $(".resultsWow").show(".booksgif");
        }
    else if (isNaN(books)) {
        $(".resultsOne").slideUp(".magic");
        $(".resultsError").append("Very funny, " + name + "! '" + booksUpper + "' is not a number that I can calculate. Consult " + character + " and try again by typing your number in digits.");  
        $(".resultsError").show(".errorgif"); 
    }  
    else {
        $(".resultsOne").slideUp(".magic");
        $(".resultsBoo").append("Booooo, " + name + "! By the year 2050, you will have ONLY read " + (books*32) + " more books! You are a disappointment to " + character + ".");
        $(".resultsBoo").show(".zerogif");
        }
}); 

$(".back").click(function() {
    location.reload();
});
