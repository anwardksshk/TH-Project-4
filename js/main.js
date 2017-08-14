function search() {
    var searchField = $('.search-box').val().toLowerCase(); 
    var resultsNo = 0;
    
    //check for matching information in a[data-title] attribute
    $('a[data-title]').each(function() {
        if ($(this).attr('data-title').search(searchField) != -1) {
          $(this).show();
          resultsNo += 1;
        } else {
         $(this).hide();
        }
    });
    
    //display message when no results are found
    if (resultsNo === 0)   {
        $(".message").text("No results found.");
        $(".message").css({
            "text-align" : "center",
            "font-size"  : "12px",
            "font-color" : ""
        });
    } else {
        $(".message").empty();   
    }
}


$('.search-box').keyup(search);

$(document).ready(function() {
    $('.search-box').val();
    
    lightbox.option({
      'wrapAround': true
    });
});
