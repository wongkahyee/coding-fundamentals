const possibleBonus = (myPosition, friendPosition) => {
    for (let i = 1; i <= 6; i++) {
      myPosition += 1;
      if (myPosition === friendPosition) {
        return true;
      } 
    }
    return false;
  };
  
  console.log(possibleBonus(3, 7));
  console.log(possibleBonus(1, 9));
  console.log(possibleBonus(5, 3));