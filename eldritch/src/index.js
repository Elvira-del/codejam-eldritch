// css
import _ from "lodash";
import css from "./style.css";

// images
import cardsGreen from "./assets/MythicCards/green";
import cardsBrown from "./assets/MythicCards/brown";
import cardsBlue from "./assets/MythicCards/blue";
import Ancients from "./assets/Ancients";
import homeImage from "./assets/home.png";
import deckImage from "./assets/mythicCardBackground.png";

// data
import difficulties from "./data/difficulties";
import { brownCards, blueCards, greenCards } from "./data/mythicCards";
import ancientsData from "./data/ancients";

const ancientsWrap = document.querySelector('.ancients-wrap');
const ancients = document.querySelectorAll('.ancient');
const points = document.querySelectorAll('.point');
const difficultiesWrap = document.querySelector('.difficulties-wrap');
const difficultiesBtn = document.querySelectorAll('.difficulties-btn'); 
const deckShirt = document.querySelector('.deck-shirt');
const currentCardPreview = document.querySelector('.card-wrap');

const Shuffle = require('shuffle');

const totalCards = [...greenCards, ...brownCards, ...blueCards];

const greenDeck = totalCards.filter(el => el.color === 'green');
const brownDeck = totalCards.filter(el => el.color === 'brown');
const blueDeck = totalCards.filter(el => el.color === 'blue');

const greenCardsShuffle = Shuffle.shuffle({deck: greenDeck});
const brownCardsShuffle = Shuffle.shuffle({deck: brownDeck});
const blueCardsShuffle = Shuffle.shuffle({deck: blueDeck});

const easyDeck = totalCards.filter(el => el.difficulty === 'easy');
const normalDeck = totalCards.filter(el => el.difficulty === 'normal');
const hardDeck = totalCards.filter(el => el.difficulty === 'hard');

const easyCardsShuffle = Shuffle.shuffle({deck: easyDeck});
const normalCardsShuffle = Shuffle.shuffle({deck: normalDeck});
const hardCardsShuffle = Shuffle.shuffle({deck: hardDeck});

let totalGreen;
let totalBrown;
let totalBlue;
let totalNum;
let diff;

let currentDeck = [];

ancientsWrap.addEventListener('click', (e) => {
  let targetAncient = e.target.dataset.name;

  ancients.forEach(elem => elem.classList.remove('is--active'));
  e.target.classList.add('is--active');

  if(!targetAncient) return; 
  showCurrentStage(targetAncient);  
  calcTotalCardsStages(targetAncient);
});

function showCurrentStage(ancient) {
  ancientsData.forEach(elem => {       
    if(elem.id === ancient) {
      for(let point of points) {
        let stageNum = point.dataset.stage;
        let pointStage = point.dataset.pointColor;
          
        point.textContent = elem[stageNum][pointStage];          
      };             
    };
  });
};

function calcTotalCardsStages(ancient) {
  ancientsData.forEach(elem => {
    if(elem.id === ancient) {
      totalGreen = elem.firstStage.greenCards + elem.secondStage.greenCards + elem.thirdStage.greenCards;
      totalBrown = elem.firstStage.brownCards + elem.secondStage.brownCards + elem.thirdStage.brownCards;
      totalBlue = elem.firstStage.blueCards + elem.secondStage.blueCards + elem.thirdStage.blueCards;
      totalNum = totalGreen + totalBrown + totalBlue;      
    };
  });
};

difficultiesWrap.addEventListener('click', (e) => {
  let targetLevel = e.target.dataset.level;

  difficultiesBtn.forEach(btn => btn.classList.remove('is--active'));
  e.target.classList.add('is--active');

  if(!targetLevel) return;
  currentDeck.length = 0;
  currentCardPreview.style.background = ``;
  createVeryEasyDeck(targetLevel);
  shuffleCurrentDeck();
});

function createVeryEasyDeck(level) {   
  if(level === 'veryEasy') {    
    const veryEasyGreen = easyDeck.filter(card => card.color === 'green').slice(0, totalGreen);
    const veryEasyBrown = easyDeck.filter(card => card.color === 'brown').slice(0, totalBrown);
    const veryEasyBlue = easyDeck.filter(card => card.color === 'blue').slice(0, totalBlue);
    currentDeck = currentDeck.concat(veryEasyGreen, veryEasyBrown, veryEasyBlue);

    switch (veryEasyGreen.length) {
      case 'totalGreen':        
        break;     
      default:        
        diff = totalGreen - veryEasyGreen.length;
        currentDeck = currentDeck.concat(normalDeck.filter(card => card.color === 'green').slice(0, diff));
        break;
    };   
    
    switch (veryEasyBrown.length) {
      case 'totalBrown':        
        break;     
      default:        
        diff = totalBrown - veryEasyBrown.length;
        currentDeck = currentDeck.concat(normalDeck.filter(card => card.color === 'brown').slice(0, diff));
        break;
    }; 
    
    switch (veryEasyBlue.length) {
      case 'totalBlue':        
        break;     
      default:        
        diff = totalBlue - veryEasyBlue.length;
        currentDeck = currentDeck.concat(normalDeck.filter(card => card.color === 'blue').slice(0, diff));
        break;
    }; 
       
    console.log('Сформирована колода для самого лёгкого уровня', currentDeck);
  };  
};

let shuffleDeck;
function shuffleCurrentDeck() {
  shuffleDeck = Shuffle.shuffle({deck: currentDeck});   
};

function showCurrentDeck() {     
  let shuffleCard = shuffleDeck.draw();
  for(let i = 0; i <= shuffleDeck.length; i++) {
    for(let [key, value] of Object.entries(shuffleCard)) {
      if(key === 'cardFace') currentCardPreview.style.background = `url(${value})`;
      if(key === 'id') console.log(`Вы вытянули ${value} карту`);
    };  
  };  
};

deckShirt.addEventListener('click', showCurrentDeck);



