/* 
Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, 
pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. 
Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados)
 y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.
*/

function prepareGifts(gifts) {
    let giftsAux = [];
    let repeatedNumbers = false;
  
    gifts.sort((a,b) => {
      return a - b;
    });
  
    do {
      repeatedNumbers = false;
      for(let i = 0; i < gifts.length; i++) {
        giftsAux.push(gifts[i]);
  
        if(gifts[i] === gifts[i+1]) {
          repeatedNumbers = true;
          i += 1;
        }
      }
      gifts = giftsAux;
      giftsAux = []
    }while(repeatedNumbers)
  
    return gifts
  }