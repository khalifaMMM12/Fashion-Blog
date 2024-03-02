$(document).ready(function(){
    $('#male-tab').click(function(){
      $('#male-products').show();
      $('#female-products').hide();
    });

    $('#female-tab').click(function(){
      $('#male-products').hide();
      $('#female-products').show();
    });
  });