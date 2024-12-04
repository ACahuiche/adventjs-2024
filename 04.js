/* 
¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año 
queremos que sea especial. Vamos a crear una función que recibe 
la altura del árbol (un entero positivo entre 1 y 100) y un carácter 
especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, 
construido de la siguiente manera:

El árbol está compuesto de triángulos de caracteres especiales.
Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
El árbol siempre debe tener la misma longitud por cada lado.
Debes asegurarte de que el árbol tenga la forma correcta usando saltos de 
línea \n para cada línea.
*/

function createXmasTree(height, ornament) {
  let tree = '';
  let heightCount = -1;

  for (let i = 0; i < height; i++) {
    heightCount += 2;
  }

  let spaces = (heightCount / 2) - 0.5;
  let spacesLog = (heightCount / 2) - 0.5;
  let ornamentCount = 1;

  for(let n = 0; n < height; n++) {

    for(let leftSpaces = 0; leftSpaces < spaces; leftSpaces++) {
      tree += '_';
    }

    for(let ornamentSpaces = 0; ornamentSpaces < ornamentCount; ornamentSpaces++) {
      tree += ornament;
    }

    for(let rightSpaces = 0; rightSpaces < spaces; rightSpaces++) {
      tree += '_';
    }

    tree += '\n';

    spaces--;
    ornamentCount += 2;
  }

  for(let log = 0; log < 2; log++) {
    for(let leftSpaces = 0; leftSpaces < spacesLog; leftSpaces++) {
      tree += '_';
    }

    tree += '#';

    for(let rightSpaces = 0; rightSpaces < spacesLog; rightSpaces++) {
      tree += '_';
    }
    tree += '\n'
  }

  return tree.trim();
}

console.log(createXmasTree(6, '*'));
