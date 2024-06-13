/*
* Charlie Lees
* CS5610 - Web development
* Project 1
* This javascript animates and helps highlight the navigational menu
*/


//Script to change the properties of the menu to fit the current monitor
//Using 100% will prevent scrolling
$(document).ready(function() {
    var screenHeight = $(window).height();
    $(".hamburgerMenu").css("height", screenHeight);
})
//Script to animate menu when the button is pressed
$(document).ready(function() {
    $(".hamburgerMenuButton").click(function() {
        $('.hamburgerMenu').toggleClass('open');
        $('.hamburgerMenuButton').toggleClass('pressed');
        if($('.clip').attr('controls')){
          $('.clip').removeAttr('controls')
        } else {
          $('.clip').attr('controls', 1)
          console.log("close")
        }
    })


})

//Script to have each item react to on hover together, not separately. 
$(document).ready(function() {
    //Home Button
    $("a.home-nav").mouseenter(function() {
        $(".home-nav svg").css("fill", "black");
        $("a.home-nav").css("color", "black");
    })

    $("a.home-nav").mouseleave(function() {
        $(".home-nav svg").css("fill", "white");
        $("a.home-nav").css("color", "white");
    })
    //Work Button
    $("a.work-nav").mouseenter(function() {
        $(".work-nav svg").css("fill", "black");
        $("a.work-nav").css("color", "black");
    })

    $("a.work-nav").mouseleave(function() {
        $(".work-nav svg").css("fill", "white");
        $("a.work-nav").css("color", "white");
    })
    //Education Button
    $("a.education-nav").mouseenter(function() {
        $(".education-nav svg").css("fill", "black");
        $("a.education-nav").css("color", "black");
    })

    $("a.education-nav").mouseleave(function() {
        $(".education-nav svg").css("fill", "white");
        $("a.education-nav").css("color", "white");
    })
})

