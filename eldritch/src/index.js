import _ from "lodash";
import css from "./style.css";

import difficulties from "./data/difficulties";
import { brownCards, blueCards, greenCards } from "./data/mythicCards";
import cardsGreen from "./assets/MythicCards/green";
import cardsBrown from "./assets/MythicCards/brown";
import cardsBlue from "./assets/MythicCards/blue";
import Ancients from "./assets/Ancients";
import homeImage from "./assets/home.png";
import deckImage from "./assets/mythicCardBackground.png";

import ancientsData from "./data/ancients";
import showCurrentStage from "./scripts/stage";
import { ancients } from "./scripts/stage";

const ancientsWrap = document.querySelector('.ancients-wrap');
const difficultiesWrap = document.querySelector('.difficulties-wrap');
const deckWrap = document.querySelector('.deck-wrap');


const btnDifficulties = document.querySelectorAll('.difficulties-btn');

const btnDeck = document.querySelector('.deck-btn');
const deckPreview = document.querySelector('.deck-preview');

let selectedAncient;

function showActiveAncient(activeAncient) {
  ancients.forEach(elem => elem.classList.remove('active'));

  if(selectedAncient) {
    activeAncient.classList.remove('active'); 
    selectedAncient = false;     
  };

  if(!selectedAncient) {
    activeAncient.classList.add('active');
    selectedAncient = true;
  };
};

function showDifficultiesBtn() {    
  btnDifficulties.forEach(elem => elem.classList.remove('hide'));  
};

ancientsWrap.addEventListener('click', (e) => {
  let targetAncient = e.target;

  if(!targetAncient.classList.contains('ancient')) return;

  showDifficultiesBtn();
  showActiveAncient(targetAncient);
  showCurrentStage(targetAncient);
});








function showDeckBtn() {
  deckPreview.classList.add('hide');
  btnDeck.classList.remove('hide');  
};

function showDeckPreview() {
  btnDeck.classList.add('hide');
  deckPreview.classList.remove('hide');
};

btnDeck.addEventListener('click', showDeckPreview);





difficultiesWrap.addEventListener('click', (e) => {
  let targetLevel = e.target;

  if(!targetLevel.classList.contains('difficulties-btn')) return;

  showDeckBtn();
});