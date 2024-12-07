function organizeShoes(shoes) {
    const countMap = {};

    shoes.forEach(shoe => {
        const { type, size } = shoe;
        if (!countMap[size]) {
            countMap[size] = { I: 0, R: 0 }; 
        }
        countMap[size][type]++;
    });

    const pairs = [];
    for (const size in countMap) {
        const { I, R } = countMap[size];
        const matchedPairs = Math.min(I, R); 
        for (let i = 0; i < matchedPairs; i++) {
            pairs.push(Number(size));
        }
    }

    return pairs;
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

  const shoes4 = [
    { type: 'I', size: 40 },
    { type: 'R', size: 40 },
    { type: 'I', size: 40 },
    { type: 'R', size: 40 }
  ]
  
  console.log(organizeShoes(shoes));
  console.log(organizeShoes(shoes2));
  console.log(organizeShoes(shoes3));
  console.log(organizeShoes(shoes4));