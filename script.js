$(".black").hide();

$(".black2").hide();

$(".info2").hover(function() {
$(".info2").text("Lalisa Manoban");
});

$(".info2").mouseleave(function() {
$(".info2").text("My name is Lisa");
});

$(".navItem").mouseenter(function() {
    $(".mypetsphoto").show();
});

$(".navItem").mouseleave(function() {
    $(".navItem").text("My pets");
    $(".mypetsphoto").hide();
});

$(".hover").dblclick(function() {
    $(".imageone").show();
});

$(".info3").hover(function() {
    $(".black").fadeToggle();
});

$(".info4").mouseenter(function() {
    $(".black2").slideDown();
});

$(".info4").mouseleave(function() {
    $(".black2").slideUp();
});