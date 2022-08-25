import { brownCards, blueCards, greenCards } from "../data/mythicCards/index";

export const easyDeck = [...greenCards.filter(card => card.difficulty === 'easy'), ...brownCards.filter(card => card.difficulty === 'easy'), ...blueCards.filter(card => card.difficulty === 'easy')];

export const normalDeck = [...greenCards.filter(card => card.difficulty === 'normal'), ...brownCards.filter(card => card.difficulty === 'normal'), ...blueCards.filter(card => card.difficulty === 'normal')];

export const hardDeck = [...greenCards.filter(card => card.difficulty === 'hard'), ...brownCards.filter(card => card.difficulty === 'hard'), ...blueCards.filter(card => card.difficulty === 'hard')];


