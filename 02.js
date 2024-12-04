/*
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos 
para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. 
Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
*/

function createFrame(names) {
  
    let nameSize = 0;
    let frameSize = 0;
    let frameTopAndBottom = '';
    let frame = '';
    let spacesBeforeName = 2;
    let spacesAfterName = 2;
    let numberOfSpaces = 0;
    
    for (let name of names) {
      if(name.length > nameSize) {
        nameSize = name.length;
      }
    }
  
    frameSize = spacesBeforeName + nameSize + spacesAfterName;
  
    for(let i = 0; i < frameSize; i++) {
      frameTopAndBottom += '*'
    }
  
    frame += frameTopAndBottom + '\n';
  
    for(let name of names) {
      let stringName = ''
      stringName = `* ${name}`;
      numberOfSpaces = frameSize - stringName.length - 1;
      for(let i = 0; i < numberOfSpaces; i++) {
        stringName += ' ';
      }
      stringName += '*'
      frame += stringName + '\n'
    }
  
    frame += frameTopAndBottom;
    
    return frame;
  }
  console.log(createFrame(['Alberto']))
