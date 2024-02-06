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

k2
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 3; j++) {
    if ( i == 1 || i+j == 4 )  {
      row += '* ';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}

 L
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 3; j++) {
    if (i === 1 && j === 1 || i === 5 || j === 1 ) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}

M
for (let r = 1; r <= 5; r++) {
  let row = ' ';
  for (let c = 1; c <= 5; c++) {
    if (c === 1 || c === 5 || (r + c == 6 && r<=3) || (r == c && r<=3)) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row)
}

N
for (let r = 1; r <= 5; r++) {
  let row = ' ';
  for (let c = 1; c <= 5; c++) {
    if (c === 1 || c === 5 || (r ==c ) ) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row)
}


o

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    if (
      j == 1 ||
      j == 4 ||
      (i == 1 && j == 2) ||
      (i == 1 && j == 3) ||
      (i == 1 && j == 4) ||
      (i == 5 && j == 2) ||
      (i == 5 && j == 3) ||
      (i == 5 && j == 4)
    ) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}

P
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 3; j++) {
    if (i === 1 || j === 1 || i ===3 || j === 1 || i == 2 && j == 3 ) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}

Q
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 5; j++) {
    if (i === 1 && j != 5|| j == 1 && i !==5 || i == 4 && j != 5 || j == 4 && i !=5 || i == 3 & j == 3 || i == 5 && j ==5  ) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}

q
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 3; j++) {
    if ( j === 3 || i === 1 || i == 3|| i == 2 && j ==1) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}

R
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 4; j++) {
    if (i === 1 || j === 1 || i ===3 || j === 1 || i == 2 && j == 4 || i-1 == j && i >=4 ) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}



s
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 5; j++) {
    if ( i ==1 || i == 5 || i == 2 && j == 2|| i == 3 & j ==3 || i == 4 && j ==4 ) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}

T
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 5; j++) {
    if (i === 1 || j === 3 ) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}

// U
 for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 3; j++) {
    if (i === 1 && j === 1 || i === 5 || j === 1 || j ==3 ) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}

V
 for (let i = 1; i <= 4; i++) {
  let row = '';
  for (let j = 1; j <= 7; j++) {
    if (i==j || i + j == 8 & i <= 3) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}

w
 for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 5; j++) {
    if (j==1 || j ==5 || i +j == 6 && i >=3 || i == 4 && j ==4) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}


X
 for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 5; j++) {
    if (i ==j || i + j == 6 ) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}

Y
 for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 5; j++) {
    if (i + j == 6 || i == j && i <=3  ) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}

z
 for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= 5; j++) {
    if (i + j == 6 || i ==1 || i == 5  ) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}
