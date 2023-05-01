$(function () {
  'use strict';

  // popular porduct slider start
  $('.sliderr').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });

  
  // quantity - start
  let qnt_val = $('#qnt').val();
  $('.input_number_decrement').on('click',function(){
      document.getElementById('qnt').value --;
  });

  $('.input_number_increment').on('click',function(){
      document.getElementById('qnt').value ++;
  });


});