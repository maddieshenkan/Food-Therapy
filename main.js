// THIS IS THE BUTTON EMOJI CODE

var sad = $('.sad');
var neutral = $('.neutral');
var happy = $('.happy');
var love = $('.love');
var section = $('.empty');
var strawberry = $('.strawberry')

sad.on("click",sadEmotion);
neutral.on("click",neutralEmotion);
happy.on("click",happyEmotion);
love.on("click",loveEmotion);


function sadEmotion (){
  event.preventDefault();
  section.text(`It's okay you feel that way!`);
  var sad = $('.strawberry').val();
  var saad = $('.drop-down1').val();
  var saaad  = $('.drop-down3').val();
  localStorage.setItem('sad', sad);
  localStorage.setItem('saad', saad);
  localStorage.setItem('saaad', saaad);


  console.log(localStorage);
}

function neutralEmotion(){
  event.preventDefault();
  section.text(`Good to know!`);
  var neutral = $('.strawberry').val();
  var neutrall = $('.drop-down1').val();
  var neutralll = $('.drop-down3').val();
  localStorage.setItem('neutral', neutral);
  localStorage.setItem('neutrall', neutrall);
  localStorage.setItem('neutralll', neutralll);

  console.log(localStorage)
}

function happyEmotion(){
  event.preventDefault();
  section.text(`That's great!`);
  var happy = $('.strawberry').val();
  var happyy = $('.drop-down1').val();
  var happyyy = $('.drop-down3').val();
  localStorage.setItem('happyy', happyy);
  localStorage.setItem('happy', happy);
  localStorage.setItem('happyyy', happyyy);

  console.log(localStorage);

}

function loveEmotion(){
  event.preventDefault();
  section.text(`Yay! You are making so much progress!`);
  var love = $('.strawberry').val();
  var lovee = $('.drop-down1').val();
  var loveee = $('.drop-down3').val();
  localStorage.setItem('.lovee', lovee);
  localStorage.setItem('loveee', loveee);
  localStorage.setItem('love', love);

  console.log(localStorage);

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
  section2.text(`It's okay you feel that way!`);
  var sad2 = $('.PB and J').val();
  var sad22 = $('.drop-down2').val();
  var sad222 = $('.drop-down4').val();
  localStorage.setItem('sad2', sad2);
  localStorage.setItem('sad22', sad22);
  localStorage.setItem('sad222', sad222);

  console.log(localStorage);
}

function neutralEmotion2 (){
  event.preventDefault();
  section2.text(`Okay then!`);
  var neutral2 = $('.PB and J').val();
  var neutral22 = $('.drop-down2').val();
  var neutral222 = $('.drop-down4').val();
  localStorage.setItem('netural2', netural2);
  localStorage.setItem('neutral22', neutral22);
  localStorage.setItem('neutral222', neutral222);

  console.log(localStorage);
}

function happyEmotion2 (){
  event.preventDefault();
  section2.text(`That's great!`);
  var happy2 = $('.PB and J').val();
  var happy22 = $('.drop-down2').val();
  var happy222 = $('.drop-down4').val();
  localStorage.setItem('happy2', happy2);
  localStorage.setItem('happy22', happy22);
  localStorage.setItem('happy222', happy222);

  console.log(localStorage);

}

function loveEmotion2 (){
  event.preventDefault();
  section2.text(`Yay! You are making so much progress!`);
  var love2 = $('.PB and J').val();
  var love22 = $('.drop-down2').val();
  var love222 = $('.drop-down4').val();
  localStorage.setItem('love2', love2);
  localStorage.setItem('love22', love22);
  localStorage.setItem('love222', love222);


  console.log(localStorage);
}
// GIFS

function pickGifs(){

//img src = "gifs/bravo.gif"


 var gifs= ["https://www.animatedimages.org/data/media/1103/animated-congratulation-image-0123.gif”,“https://media2.giphy.com/media/l4q7TIW8nEZYOJUf6/giphy.gif”,
“https://www.animatedimages.org/data/media/1103/animated-congratulation-image-0069.gif”,
“https://media.giphy.com/media/tHpaM2HA8fKYB89vVI/giphy.gif”,“https://media2.giphy.com/media/l2JJsgy3jxIrO94oE/source.gif”,
“https://media0.giphy.com/media/F0VBIHgbTl14fmPCuO/giphy.gif”,
“https://thumbs.gfycat.com/WellgroomedRespectfulGalapagostortoise-size_restricted.gif”,
“https://media3.giphy.com/media/65FrzyL3I8YMpcp6sT/giphy.gif”,
“https://i.pinimg.com/originals/b6/e6/4d/b6e64da9259d46bff8675f3b05803818.gif”,
“https://media1.giphy.com/media/20PAya23nqQp0VtDew/giphy.gif”,
“https://thumbs.gfycat.com/RemorsefulHeftyAsianelephant-max-1mb.gif"]
var random = Math.random() * pickGifs.length;
 var rounded = Math.floor(random);
 var outcome = pickGifs[rounded];
 message.text(pickGifs[rounded]);

}
