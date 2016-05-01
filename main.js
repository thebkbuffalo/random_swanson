$(document).ready(function(){
  console.log('linked up');


  $('#next').on('click', function(){
    $.ajax({
      url: "http://ron-swanson-quotes.herokuapp.com/v2/quotes",
    }).done(function(data) {
      console.log(data[0]);
      $('#quote').empty().append(data[0]);
    });
  });
});
