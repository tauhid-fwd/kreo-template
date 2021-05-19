// WORK SECTION IMAGE HOVER
    $('.imghoverOne').contenthover({
        overlay_background:'#000',
        overlay_opacity:0.8
        });
// IMG ZOOM ON HOVER TEAM SECTION
$(function(){
    $('.imghover').imgHover({
        grow:false

    });
  });
// FLEX SLIDER
$('.example').jdSlider({
    isLoop:true,
});
$(function() {
    $('.nav-item a, .menuBar a').on('click', function() {
        $('html, body').animate({
            scrollTop: $($.attr(this,'href')).offset().top
        },800);
        return false;
    });
})
// HUMBURGER MENU
function openMenu() {
    $('.menuBar').css('width','100%');
}
function closeMenu() {
    $('.menuBar').css('width','0');
}







  
    