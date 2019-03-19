window.addEventListener('load', init);
const levels ={
  easy: 5,
  medium:3,
  hard:2
}
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;
let bestscore = 0;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const bestScore = document.querySelector('#bestscore');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

function init(){
  seconds.innerHTML = currentLevel;
  bestScore.innerHTML = bestscore;
  //load words from array
  showWord(words);
  wordInput.addEventListener('input',starMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
  bestScore.innerHTML = bestscore
 }

function showWord(words){
  const randIndex = Math.floor(Math.random() * words.length );
  currentWord.innerHTML = words[randIndex];
  bestScore.innerHTML = bestscore;
}
function starMatch(){
  if(matchWords()){
    isPlayig = true;
    time = currentLevel ;
    showWord(words);
    wordInput.value= "";
    score+=1;
  }
  if(score>0)
    scoreDisplay.innerHTML = score;
  else
    scoreDisplay.innerHTML = 0;
  bestScore.innerHTML = bestscore;
}
function matchWords(){
  return wordInput.value === currentWord.innerHTML ;
}
function countdown(){
  if(time>0){
    time-=1;
  }else {
    isPlaying =false;
  }
  timeDisplay.innerHTML = time;
  bestScore.innerHTML = bestscore;
}
function checkStatus(){
  if(!isPlaying && time == 0){
    message.innerHTML = 'Game Over !';
    if(score > bestscore){
      bestscore = score;
      console.log('here');
      bestScore.innerHTML = bestscore;
    }
    score = -1;
  }
}