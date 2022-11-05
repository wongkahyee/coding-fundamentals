function missingLetter(str) {  
    for (let i = 0; i < str.length -1; i++) {
        if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
  }
  
console.log(missingLetter("abce"));
console.log(missingLetter("abcdefghjklmno"));
console.log(missingLetter("stvwx"));
console.log(missingLetter("bcdf"));
console.log(missingLetter("abcdefghijklmnopqrstuvwxyz"));