---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {

  currentWidth = $('.panel-cover').width()
  if (currentWidth < 960) {
    // for menu stuff
    $('.navigation-wrapper').addClass('hidden')
    $('.navigation-wrapper').removeClass('visible')
    // for Resume page
    $('.pdf-viewer').remove()
    $( ".pdf-link" )
      .addClass( "visible" )
      .removeClass("hidden")
      .append( "<a href='/assets/pdf/cv.pdf' target='_blank'>Click here to see my CV.</a>" )

  }else{$( '.pdf-link' ).addClass('visible'); $( '.pdf-link' ).removeClass('hidden')}



  $('a.blog-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  })

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    //$('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')

    if($('.navigation-wrapper').hasClass('visible')){
      $('.navigation-wrapper').removeClass('visible')
      $('.navigation-wrapper').addClass('hidden animated bounceInUp')
    }else{
      $('.navigation-wrapper').removeClass('hidden')
      $('.navigation-wrapper').addClass('visible animated bounceInDown')
    }

  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')

    if($('.navigation-wrapper').hasClass('visible')){
      $('.navigation-wrapper').removeClass('visible')
      $('.navigation-wrapper').addClass('hidden')
    }else{
      $('.navigation-wrapper').removeClass('hidden')
      $('.navigation-wrapper').addClass('visible')
    }

  })

})
