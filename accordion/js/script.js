$(function(){
    $('.qa-q').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('is-open');
    });
});