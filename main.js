$(document).ready(function(){
  console.log('linked up');

  pics = ['pics/swanson1.png', 'pics/swanson2.jpg', 'pics/swanson3.jpg', 'pics/swanson4.jpg', 'pics/swanson5.jpg', 'pics/swanson6.jpg', 'pics/swanson7.jpg', 'pics/swanson8.jpg', 'pics/swanson9.png', 'pics/swanson10.jpg', 'pics/swanson11.jpg', 'pics/swanson12.jpg', 'pics/swanson13.jpg', 'pics/swanson14.jpg', 'pics/swanson15.jpg', 'pics/swanson16.png', 'pics/swanson17.jpg', 'pics/swanson18.jpg', 'pics/swanson19.jpg', 'pics/swanson20.jpg', 'pics/swanson21.jpg', 'pics/swanson22.png']

  $('#next').on('click', function(){
    rando = pics[Math.floor(Math.random() * pics.length)]
    $.ajax({
      url: "http://ron-swanson-quotes.herokuapp.com/v2/quotes",
    }).done(function(data) {
      $('#image').empty().append('<img src="' + rando + '" alt = "" height="350px" width="550px">');
      $('#quote').empty().append(data[0]);
    });
  });
});
