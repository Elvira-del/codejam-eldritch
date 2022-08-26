import ancientsData from "../data/ancients";

export const ancients = document.querySelectorAll('.ancient');
const stageWrap = document.querySelectorAll('.stage-wrap');
const pointWrap = document.querySelectorAll('.point-wrap');
// const point = document.querySelectorAll('.point');
const pointsGreen = document.querySelectorAll('.point-green');
const pointsBrown = document.querySelectorAll('.point-brown');
const pointsBlue = document.querySelectorAll('.point-blue');

export let totalCardsStages;

function showCurrentStage(ancient) {
  let currentAncient = ancient.getAttribute('id');  
    
  ancientsData.forEach(elem => {
    if(elem.id === currentAncient) {
      // const stages = [elem.firstStage, elem.secondStage, elem.thirdStage];
      const totalCardsFirstStage = Object.values(elem.firstStage).reduce((a, b) => a + b, 0); 
      const totalCardsSecondStage = Object.values(elem.secondStage).reduce((a, b) => a + b, 0);
      const totalCardsThirdStage = Object.values(elem.thirdStage).reduce((a, b) => a + b, 0);       

      pointsGreen.forEach((point, idx) => {
        if(idx === 0) point.textContent = elem.firstStage.greenCards;
        if(idx === 1) point.textContent = elem.secondStage.greenCards; 
        if(idx === 2) point.textContent = elem.thirdStage.greenCards;        
      });
      
      pointsBrown.forEach((point, idx) => {
        if(idx === 0) point.textContent = elem.firstStage.brownCards;
        if(idx === 1) point.textContent = elem.secondStage.brownCards; 
        if(idx === 2) point.textContent = elem.thirdStage.brownCards;        
      });

      pointsBlue.forEach((point, idx) => {
        if(idx === 0) point.textContent = elem.firstStage.blueCards;
        if(idx === 1) point.textContent = elem.secondStage.blueCards; 
        if(idx === 2) point.textContent = elem.thirdStage.blueCards;        
      });

      totalCardsStages = totalCardsFirstStage + totalCardsSecondStage + totalCardsThirdStage;      
    };    
  });  
}

export default showCurrentStage