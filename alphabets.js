// basic pattern to get filled squre  (checking loop working ) 
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 7; j++) {
    console.log("*");
  }
  console.log("\n");
}

for (let i = 0; i <= 5; i++){
  let row = ("")
  for (let j = 0; j <= 5; j++){
    row += "*";
  }
  console.log(row);
}

 // A
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 5; j++) {
    if (i === 1 || j === 5 || i === 3 || j === 1) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}

 // B
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 5; j++) {
    if (i === 1 || j === 5 || i === 3 || j === 1 || i === 5 || j === 1) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}

//  B2
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 3; j++) {
    if (i === 1 || j === 3 || i === 3 || j === 3 || i === 5 || j === 1) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}

//  c
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 3; j++) {
    if (i === 1 || j === 1 || i === 5 || j === 1 ) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}

//  d
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 3; j++) {
    if (i === 1 || j === 1 || i === 5 || j === 3 || i === 1) {
      row += '*';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}

//   E
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 3; j++) {
    if (i === 1 || j === 1 || i === 5 || j === 1 || i ===3
       || j === 1 ) {
      row += '* ';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}

//   F
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 3; j++) {
    if (i === 1 || j === 1 || i ===3 || j === 1 ) {
      row += '* ';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}

// G
for (let i = 0; i < 7; i++) {
  let row = ("");
  for (let j = 0; j < 5; j++) {
    if (j === 0 || i === 0 && j !== 4 || i === 6 && j !== 4 || i === 3 && j !== 1 && j !== 2 || j === 4 && i !== 1 && i !== 2) {
      row += ("*");
    } else {
      row += (" ");
    }
  }
  console.log(row)
}

// I
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 5; j++) {
    if (i === 1 || j === 3 || i === 5 ) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}

// J
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 6; j++) {
    if (i === 1 || j === 4 || i == 4 && j==2|| i ==5 && j == 2|| i == 5 && j == 3)  {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}


// k
 for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 3; j++) {
    if (j === 1 || i == 2 && j ==2 || i == 1 && j ==3 || i == 4 && j == 2 || i == 5 && j ==3)  {
      row += '* ';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}
