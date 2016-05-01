$(document).ready(function(){
  console.log('linked up');

  pics = ['pics/swanson1.png', 'pics/swanson2.jpg', 'pics/swanson3.jpg', 'pics/swanson4.jpg', 'pics/swanson5.jpg', 'pics/swanson6.jpg', 'pics/swanson7.jpg', 'pics/swanson8.jpg', 'pics/swanson9.png', 'pics/swanson10.jpg']

  $('#next').on('click', function(){
    rando = pics[Math.floor(Math.random() * pics.length)]
    console.log(rando);
    $.ajax({
      url: "http://ron-swanson-quotes.herokuapp.com/v2/quotes",
    }).done(function(data) {
      console.log(data[0]);
      $('#image').empty().append('<img src="' + rando + '" alt = "" height="350px" width="350px">');
      $('#quote').empty().append(data[0]);
    });
  });
});
