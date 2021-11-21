define([
  'jquery'
], function ($) {
  'use strict';

  const $win = $(window);
  const $doc = $(document);
  const $header = $('header');

  $doc.on('scroll', function() {
    if ($win.scrollTop() > 0) {
      $header.addClass('fixed');
    } else {
      $header.removeClass('fixed');
    }
  });
});