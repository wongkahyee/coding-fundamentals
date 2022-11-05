function calculateAge(date) {
  let formattedDate = date.split("/");
  let difference = Date.now() - new Date(formattedDate[2], [1], formattedDate[0]);
  let currentAge = Math.floor(difference / 31557600000);
  // dividing by 1000*60*60*24*365.25
  return currentAge;
}

console.log(calculateAge("20/7/2002") === 19);
console.log(calculateAge("1/1/1979") === 43);

