//Owl Carousel
$("#testimonial-resto").owlCarousel({
    autoPlay: 3000,
    stopOnHover: true,
    navigation: false,
    paginationSpeed: 1000,
    goToFirstSpeed: 2000,
    singleItem: true,
    autoHeight: true,
    items: 1,
});
$("#clients-testi").owlCarousel({
    autoPlay: 3000,
    items: 3,
    itemsDesktop : [1024,3],
    itemsDesktopSmall : [900,2],
    itemsTablet: [600,1],
});