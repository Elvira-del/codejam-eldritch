import difficulties from "../data/difficulties";
import { brownCards, blueCards, greenCards } from "../data/mythicCards/index";
import ancientsData from "../data/ancients";
import { totalCardsStages } from "./stage";
import { easyDeck, normalDeck, hardDeck } from "../scripts/cards";
const Shuffle = require('shuffle');

let randomCardNum;
let currentDeck = [];
let currentCard;
let diff;
export let shuffleDeck;

function calcRandomCardNum(min, max) {
  randomCardNum = Math.floor(Math.random() * (max - min + 1)) + min;
};

function createCurrentDeck(level) {
// Очень легкий уровень сложности: из набора берутся все карты со снежинками, если карт не хватает то добираются обычные карты
// снежинки - easy
// обычные - normal

calcRandomCardNum(0, totalCardsStages);

if(level.getAttribute('id') === 'veryEasy') {    
  currentDeck = easyDeck;
  
  if(currentDeck.length < totalCardsStages) {
    diff = totalCardsStages - currentDeck.length;
    currentDeck.push(...normalDeck.slice(0, diff));     
  };  
  
  console.log(diff)
  
  console.log(currentDeck.length)
  console.log(totalCardsStages)
};
};

function shuffleCurrentDeck() {
  shuffleDeck = Shuffle.shuffle({deck: currentDeck});
  console.log(shuffleDeck)  
}

export { createCurrentDeck, shuffleCurrentDeck}