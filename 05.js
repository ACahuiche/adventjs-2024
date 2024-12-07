function organizeShoes(shoes) {
    let bootsPairSizes = [];
    let rightBootIndex, leftBootIndex;
  
    for(let [index,boot] of shoes.entries()) {
      if(boot.type === 'I') {
        rightBootIndex = shoes.findIndex(findBoot => findBoot.type === 'R' && findBoot.size === boot.size);
        
        if(rightBootIndex !== -1) {
          bootsPairSizes.push(boot.size);
          shoes.splice(rightBootIndex,1);
          shoes.splice(index,1);
        }
      }
  
      if(boot.type === 'R') {
        leftBootIndex = shoes.findIndex(findBoot => findBoot.type === 'L' && findBoot.size === boot.size);
  
        if(leftBootIndex !== -1) {
          bootsPairSizes.push(boot.size);
          shoes.splice(leftBootIndex,1);
          shoes.splice(index,1);
        }
      }
    }
  
    return bootsPairSizes;
  }

  const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]

  const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]

  const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
  ]
  
  console.log(organizeShoes(shoes));
  console.log(organizeShoes(shoes2));
  console.log(organizeShoes(shoes3));