var slider = tns({
    container: ".about__slider",
    items: 1,
    speed: 200,
    gutter: 100,
    slideBy: "page",
    autoplay: true,
    //   controlsContainer: "#controls",
    //   nextButton: ".next",
    //   prevButton: ".prev",
  
    nav: false,
    autoplayButtonOutput: false,
    responsive: {
      1250: {
        items: 1,
      },
      520: {
        items: 1,
      },
    },
  });