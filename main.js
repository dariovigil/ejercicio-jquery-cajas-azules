function init() {
  $('#menu li:first').addClass('selected');
  $('article:nth-child(2)').addClass('middle');
  $('.list-item:odd').addClass('highlighted');
  $('.list-item:last').css({border:  '1px solid #eee'});
  $('input').focus (function() {
    $(this).css({border: '1px solid red'});
  });
  $('input').blur (function() {
    $(this).css({border: '1px solid #eee'});
  });
};
$(document).ready(init);
