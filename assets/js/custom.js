$(document).ready(function () {
    $("#pg .content, #ug .content, #hsc .content, #ssc .content").hide();
    $('.tooltipped').tooltip();
    var pgicon = false;
    var ugicon = false;
    var hscicon = false;
    var sscicon = false;



    $("#pg").click(function () {
        var obj = "pg";
        if (!pgicon) {
            $(("#" + obj + " .small.material-icons")).text("expand_less");
            $(("#" + obj + " .content")).show(500);
            pgicon = true; // expanded
        } else {
            $(("#" + obj + " .small.material-icons")).text("expand_more");
            $(("#" + obj + " .content")).hide(500);
            pgicon = false; // collapsed
        }
    });
    $("#ug").click(function () {
        var obj = "ug";
        if (!ugicon) {
            $(("#" + obj + " .small.material-icons")).text("expand_less");
            $(("#" + obj + " .content")).show(500);
            ugicon = true; // expanded
        } else {
            $(("#" + obj + " .small.material-icons")).text("expand_more");
            $(("#" + obj + " .content")).hide(500);
            ugicon = false; // collapsed
        }
    });
    $("#hsc").click(function () {
        var obj = "hsc";
        if (!hscicon) {
            $(("#" + obj + " .small.material-icons")).text("expand_less");
            $(("#" + obj + " .content")).show(500);
            hscicon = true; // expanded
        } else {
            $(("#" + obj + " .small.material-icons")).text("expand_more");
            $(("#" + obj + " .content")).hide(500);
            hscicon = false; // collapsed
        }
    });
    $("#ssc").click(function () {
        var obj = "ssc";
        if (!sscicon) {
            $(("#" + obj + " .small.material-icons")).text("expand_less");
            $(("#" + obj + " .content")).show(500);
            sscicon = true; // expanded
        } else {
            $(("#" + obj + " .small.material-icons")).text("expand_more");
            $(("#" + obj + " .content")).hide(500);
            sscicon = false; // collapsed
        }
    });

    $("#blogs").click(function () {
        alert("This feature is currently under development, thus unavailable!!");
    });
    $('.carousel').carousel({
        dist: -100,
    });
    $('.carousel.carousel-slider').carousel({

        indicators: true
    });
    var width = $(window).width();
    if (width > 700) {
        $("#name").removeClass("hide").css({
            "text-align": "center",
            "font-size": "35px"
        });
        $("#desc").removeClass("hide").css({
            "text-align": "center",
            "font-size": "20px"
        });
        $("#job-title").css({
            "height": "20rem"
        });
        $("#name").removeClass("hide").css({
            "opacity": "0",
            "right": "60px"
        }).animate({
            left: '20px',
            opacity: '1'
        }, 1000, function () {
            $("#desc").removeClass("hide").css({
                "opacity": "0",
                "right": "60px"
            }).animate({
                left: '20px',
                opacity: '1'
            }, 600);
        });

    } else {
        $("#name").removeClass("hide").css({
            "text-align": "center",
            "font-size": "25px"
        });
        $("#desc").removeClass("hide").css({
            "text-align": "center",
            "font-size": "15px"
        });
        $("[class*='my-card']").css({
            "height": "8rem",
            "width": "8rem"
        });
        $(".my-card>img").css({
            "height": "8rem",
            "width": "8rem"
        });
        $("#gallery-images").css({
            "padding-top": "25%",
            "padding-bottom": "30%"
        });

    }

    // $(window).scroll(function () {
    //     var hT = $('#skills-index-banner').offset().top,
    //         hH = $('#skills-index-banner').outerHeight(),
    //         wH = $(window).height(),
    //         wS = $(this).scrollTop();
    //     if ((wS / 2) > (hT + hH - wH)) {
    //         animateHeads("skills");
    //     }

    //     var hT = $('#experience-index-banner').offset().top,
    //         hH = $('#experience-index-banner').outerHeight(),
    //         wH = $(window).height(),
    //         wS = $(this).scrollTop();
    //     if ((wS / 2) > (hT + hH - wH)) {
    //         animateHeads("experience");
    //     }

    //     var hT = $('#gallery-index-banner').offset().top,
    //         hH = $('#gallery-index-banner').outerHeight(),
    //         wH = $(window).height(),
    //         wS = $(this).scrollTop();
    //     if ((wS / 2) > (hT + hH - wH)) {
    //         animateHeads("gallery");
    //     }

    //     var hT = $('#education-index-banner').offset().top,
    //         hH = $('#education-index-banner').outerHeight(),
    //         wH = $(window).height(),
    //         wS = $(this).scrollTop();
    //     if ((wS / 2) > (hT + hH - wH)) {
    //         animateHeads("education");
    //     }

    //     var hT = $('#contact-index-banner').offset().top,
    //         hH = $('#contact-index-banner').outerHeight(),
    //         wH = $(window).height(),
    //         wS = $(this).scrollTop();
    //     if ((wS / 2) > (hT + hH - wH)) {
    //         animateHeads("contact");
    //     }
    // });

    $("#d-skills").click(function () {
        scrollNavs(this);
        animateHeads("skills");
    });

    $("#d-contact").click(function () {
        scrollNavs(this);
        animateHeads("contact");
    });

    $("#d-experience").click(function () {
        scrollNavs(this);
        animateHeads("experience");
    });

    $("#d-gallery").click(function () {
        scrollNavs(this);
        animateHeads("gallery");
    });

    $("#d-education").click(function () {
        scrollNavs(this);
        animateHeads("education");
    });

    function scrollNavs(obj) {
        // Make sure this.hash has a value before overriding default behavior        
        if (obj.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = obj.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;

            });
        } // End if
    }

    function animateHeads(headName) {
        setTimeout(function () {
            $("#" + headName + "-header").animate({
                right: '90%',
                "padding-left": '5rem'
            }, 200);
        }, 1000);
    }

    $("#scroll-top-icon").click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    var sliderContainer = $("#slider-container");
    var hiddenElements = $(".mySlides .hide-on-small-only");
    var mySlides = "<div class='mySlides'></div>";
    var dotContainer = $(".dot-container");
    var prev = $('.slide-prev');
    var next = $('.slide-next');
    if (width < 600) {
        var i;
        for (i = 0; i < hiddenElements.length; i++) {
            var ele = $(mySlides).append(hiddenElements[i]);
            $(hiddenElements[i]).removeClass("hide-on-small-only")
            $(sliderContainer).append(ele);

            // var dot = "<span class='dot' onclick='currentSlide(" + (i + 2) + ")'></span>";
            // dotContainer.append(dot);
        }
        $(sliderContainer).append(prev);
        $(sliderContainer).append(next);
        $(dotContainer).hide();

        var cols = $(".mySlides [class*='col m3 l3']");
        for(var i = 0; i < cols.length; i++){
            $(cols[i]).removeClass("col");
            $(cols[i]).find(".icon-block").removeClass("icon-block");
            console.log("Col removed");
        }
        var paras = $(".mySlides p");
        for(var i=0; i< paras.length; i++){
            $(paras[i]).attr("style","font-size:0.8rem;");
        }
        $("#technolgy").removeClass("right");

        $("#myslideblock").attr("style","padding-top: 2px;");
        $(sliderContainer).attr("style","padding-top: 2px;");
        $("#scroll-top-icon").removeClass("btn-large").addClass("btn-small");
        $(".fixed-action-btn").attr("style","bottom:85px; right: 24px;");
    }


});