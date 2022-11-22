function perimeter (letter, num) {
   return (letter==="s")*(num*4) + (letter==="c")*(num*6.28)
   
}

console.log(perimeter("s",7))
console.log(perimeter("c",4))
console.log(perimeter("c",9))