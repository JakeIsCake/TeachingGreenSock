if (document.documentElement.clientWidth > 768) {
    // init controller
    var controller = new ScrollMagic.Controller();



    //Fly in from the bottom
    var fromBottomTimeline = new TimelineMax();
    var fromBottomFrom = TweenMax.from("#bottom", 1, {
        y: 900
    });
    var fromBottomTo = TweenMax.to("#bottom", 1, {
        y: -300
    });
    fromBottomTimeline
        .add(fromBottomFrom)
        .add(fromBottomTo);

    new ScrollMagic.Scene({
            triggerElement: "#slidein2",
            offset: 0,
        })
        .setTween(fromBottomTimeline)
        .duration('100%')
        //    .reverse(false)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);


//Fly in from the bottom2
    var fromBottom2Timeline = new TimelineMax();
    var fromBottom2From = TweenMax.from("#bottom2", 1, {
        y: 2000
    });
    var fromBottom2To = TweenMax.to("#bottom2", 1, {
        y: -1000
    });
    fromBottom2Timeline
        .add(fromBottom2From)
        .add(fromBottom2To);

    new ScrollMagic.Scene({
            triggerElement: "#slidein2",
            offset: -200,
        })
        .setTween(fromBottom2Timeline)
        .duration('200%')
        //    .reverse(false)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);




//Fly in from the bottom3
    var fromBottom3Timeline = new TimelineMax();
    var fromBottom3From = TweenMax.from("#bottom3", 1, {
        y: 400
    });
    var fromBottom3To = TweenMax.to("#bottom3", 1, {
        y: -200
    });
    fromBottom3Timeline
        .add(fromBottom3From)
        .add(fromBottom3To);

    new ScrollMagic.Scene({
            triggerElement: "#slidein2",
            offset: 0,
        })
        .setTween(fromBottom3Timeline)
        .duration('130%')
        //    .reverse(false)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);







    new ScrollMagic.Scene({
            triggerElement: "body",
            triggerHook: "onEnter",
        })
        .duration('100%')
        .setTween("body", {
            backgroundPosition: "100% 0%",
            ease: Linear.easeNone
        })
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);


}
