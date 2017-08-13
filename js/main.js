function search() {
    var searchField = $('.search-box').val().toLowerCase(); 
    var resultsNo = 0;
    
    $('a[data-title]').each(function() {
        if ($(this).attr('data-title').search(searchField) != -1) {
          $(this).show();
          resultsNo += 1;
        } else {
         $(this).hide();
        }
    });
    
    if (resultsNo === 0)   {
        $(".main-container").add("<p>No results found</p>").appendTo(document.body).css({
            "text-align" : "center",
            "font-size"  : "12px",
            "font-color" : ""
        });
    }
}


$('.search-box').keyup(search);

$(document).ready(function() {
    $('.search-box').val('');
});
