import difficulties from "../data/difficulties";
import { brownCards, blueCards, greenCards } from "../data/mythicCards/index";
import ancientsData from "../data/ancients";
import { totalCardsStages } from "./stage";
import { easyDeck, normalDeck, hardDeck } from "../scripts/cards";
const Shuffle = require('shuffle');

let randomCardNum;
export let currentDeck = [];
let currentCard;
let diff;
export let shuffleDeck;

function calcDiff(total, deck) {  
  if(currentDeck.length < totalCardsStages) {
    diff = total - deck;  
  } else {
    diff = 0;
  };    
};

function createCurrentDeck(level) {
  // very easy level
  if(level.getAttribute('id') === 'veryEasy' ) {  
  currentDeck = currentDeck.concat(easyDeck);

  calcDiff(totalCardsStages, currentDeck.length);

  if(diff > 0) {
    currentDeck.push(...normalDeck.slice(0, diff));    
  };    
  
  };
  shuffleCurrentDeck();
};

function shuffleCurrentDeck() {
  shuffleDeck = Shuffle.shuffle({deck: currentDeck});   
}

export { createCurrentDeck, shuffleCurrentDeck}