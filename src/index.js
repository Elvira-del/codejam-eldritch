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


const ancientsWrap = document.querySelector('.ancients-wrap');
const difficultiesWrap = document.querySelector('.difficulties-wrap');
const deckWrap = document.querySelector('.deck-wrap');
const ancients = document.querySelectorAll('.ancient');
const btnDifficulties = document.querySelectorAll('.difficulties-btn');
const btnDeck = document.querySelector('.deck-btn');
const deckPreview = document.querySelector('.deck-preview');

const showDifficultiesBtn = () => {    
  btnDifficulties.forEach(elem => elem.classList.remove('hide'));
};

ancients.forEach(elem => {
  elem.addEventListener('click', showDifficultiesBtn);
});

const showDeckBtn = () => {
  deckPreview.classList.add('hide');
  btnDeck.classList.remove('hide');  
};

btnDifficulties.forEach(elem => {
  elem.addEventListener('click', showDeckBtn);
});

const showDeckPreview = () => {
  btnDeck.classList.add('hide');
  deckPreview.classList.remove('hide');
};

btnDeck.addEventListener('click', showDeckPreview);