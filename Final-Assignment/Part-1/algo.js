function reverse(string) {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString;
}

console.log(reverse("abcde"));
console.log(reverse("hello"));
console.log(reverse("Greetings from The Hacker Collective"));

function sameBackAndForth(string) {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  if (reversedString === string) {
    return true;
  } else {
    return false;
  }
}

console.log(sameBackAndForth("abba"));
console.log(sameBackAndForth("abcdefg"));

function reverseInt(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}

console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));

function sumArr(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

console.log(sumArr([1, 2, 3, 4, 5]) == 15);
console.log(sumArr([1000, 2000, 44, 55, 22]) == 3121);
console.log(sumArr([123, 456, 789]) == 1368);

function deafGrandma(string) {
  const upperCaseString = string.toUpperCase();
  const arrayString = upperCaseString.split(" ");

  let result = "";
  for (let i = 0; i < arrayString.length; i++) {
    result += arrayString[i] + "!! ";
  }

  return result;
}

console.log(deafGrandma("I have a bad feeling about this"));

function whatIsMissing(string) {
  for (let i = 0; i < string.length - 1; i++) {
    if (string.charCodeAt(i + 1) - string.charCodeAt(i) > 1) {
      return String.fromCharCode(string.charCodeAt(i) + 1);
    }
  }
}
console.log(whatIsMissing("abcdefghijklmnopqrstuvwxyz") == undefined);
console.log(whatIsMissing("bcdf") == "e");
console.log(whatIsMissing("abcdefghjklmno") == "i");

function swap(string, before, after) {
    const newString = string.split(' ');
    for (let i = 0; i < string.length; i++) {
      if(before === newString[i]) {
        string = string.replace(before, after);
      } 
      if (before[0] === before[0].toUpperCase()) {
        const swap = after[0].toUpperCase() + after.slice(1);
        string = string.replace(before, swap)
      }
    }
    return string;
  }

console.log(swap("His name is Tom", "Tom", "john") == "His name is John")
console.log(swap("Let us get back to more Coding", "Coding", "algorithms") == "Let us get back to more Algorithms")
console.log(swap("This has a spellngi error", "spellngi", "spelling") == "This has a spelling error")
