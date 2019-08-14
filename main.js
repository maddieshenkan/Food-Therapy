// THIS IS THE BUTTON EMOJI CODE

var sad = $('.sad');
var neutral = $('.neutral');
var happy = $('.happy');
var love = $('.love');
var section = $('.empty');

sad.on("click",sadEmotion);
neutral.on("click",neutralEmotion);
happy.on("click",happyEmotion);
love.on("click",loveEmotion);

function sadEmotion (){
  section.append(`<p>PUTMESSAGE</p>`);
}

function neutralEmotion(){
  section.append(`<p>PUTMESSAGE</p>`);
}

function happyEmotion(){
  section.append(`<p>PUTMESSAGE</p>`);
}

function loveEmotion(){
  section.append(`<p>PUTMESSAGE</p>`);
}
