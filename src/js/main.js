import $ from 'jquery'

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        navigation : true,
        responsive:{
            0:{
                cards:1
            },
            600:{
                cards:3
            },
            1000:{
                cards:5
            }
        }
    })
})

