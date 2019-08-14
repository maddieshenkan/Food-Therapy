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
  event.preventDefault();
  section.text(`PUTMESSAGE`);
  var sad = $('.sad').val();
  localStorage.clear();
  localStorage.setItem('sad', sad)

  console.log(localStorage);
}

function neutralEmotion(){
  event.preventDefault();
  section.text(`PUTMESSAGE`);
}

function happyEmotion(){
  event.preventDefault();
  section.text(`PUTMESSAGE`);

}

function loveEmotion(){
  event.preventDefault();
  section.text(`PUTMESSAGE`);

}

// same thing but for the other drop down

var sad2 = $('.sad2');
var neutral2 = $('.neutral2');
var happy2 = $('.happy2');
var love2 = $('.love2');
var section2 = $('.empty2');

sad2.on("click", sadEmotion2);
neutral2.on("click", neutralEmotion2);
happy2.on("click", happyEmotion2);
love2.on("click", loveEmotion2);

function sadEmotion2 (){
  event.preventDefault();
  section2.text(`PUTMESSAGE`);
}

function neutralEmotion2 (){
  event.preventDefault();
  section2.text(`PUTMESSAGE`);
}

function happyEmotion2 (){
  event.preventDefault();
  section2.text(`PUTMESSAGE`);

}

function loveEmotion2 (){
  event.preventDefault();
  section2.text(`PUTMESSAGE`);
}
