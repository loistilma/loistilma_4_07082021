function scrollToTarget(t) {
    1 == t ? t = 0 : 2 == t ? t = $(document).height() : (t = $(t).offset().top, $(".sticky-nav").length && (t -= $(".sticky-nav .navbar-header").height())), $("html,body").animate({
        scrollTop: t
    }, "slow"), $(".navbar-collapse").collapse("hide")
}

function animateWhenVisible() {
    $(window).scroll(function() {
        scrollToTopView()
    })
}

function scrollToTopView() {
    $(window).scrollTop() > $(window).height() / 3 ? $(".scrollToTop").hasClass("showScrollTop") || $(".scrollToTop").addClass("showScrollTop") : $(".scrollToTop").removeClass("showScrollTop")
}

$(function(){
    animateWhenVisible()
    
});

window.scrollToTarget = scrollToTarget;