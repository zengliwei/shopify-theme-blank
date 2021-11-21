define([
  'jquery'
], function ($) {
  'use strict';
  
  const $win = $(window);
  const $header = $('header');
  
  $(document).on('scroll', function() {
    console.log($win.scrollTop());
  });
});