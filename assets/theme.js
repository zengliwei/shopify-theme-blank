define([
  'jquery'
], function ($) {
  'use strict';

  const $win = $(window);
  const $doc = $(document);
  
  $doc.ready(function(){
    const $header = $('header');

    const updateHeader = function() {
      if ($win.scrollTop() > 0) {
        $header.addClass('fixed');
      } else {
        $header.removeClass('fixed');
      }
    };
  });
  
  $doc.on('scroll', updateHeader);
});