$('.hamburger-btn').click(function(){
    console.log("burger open");
    $('#mySidenav').addClass("side-bar");
    $('#mySidenav').removeClass("hide");
    $('body').css("overflow","hidden");
    $('.x-button').removeClass("hide-x");
})

$('.x-button').click(function(){
    console.log("burger class");
    $('#mySidenav').removeClass("side-bar");
    $('#mySidenav').addClass("hide");
    $('body').css("overflow","auto");
    $('.x-button').addClass("hide-x");
})

