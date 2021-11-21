define([
  'jquery'
], function ($) {
  'use strict';
  
  const $win = $(window);
  const $header = $('header');
  
  $(document).on('scroll', function() {
    if ($win.scrollTop() > 0) {
      $header.addClass('fixed');
    } else {
      $header.removeClass('fixed');
    }
  });
});