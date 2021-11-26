$(document).ready(function(){
    let select = $('.sender__select');
    let form = $(".sender__form");
    let changeButton = $(".sender__choose");


    $(select).on('change', function(){
        $(this)
        .removeClass("invalid")
        .addClass('valid');
    });

    $(changeButton).on('click',function(e){
        e.preventDefault();
        $(select)
        .val($(e.target).attr("data-option"))
        .trigger("change");
    });
    
    $(form).on("submit", function(e){
        e.preventDefault();
        if($(select).hasClass("valid"))
            alert("Do something with form data...");
        else
            $(select).addClass("invalid");

    });
});