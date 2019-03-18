'use strict';

$(function () {
  $('.accordion-header').toggleClass(`test`)
  $('.accordion-header').on('click', function() {
    $(this).toggleClass(`test`)
  })
})