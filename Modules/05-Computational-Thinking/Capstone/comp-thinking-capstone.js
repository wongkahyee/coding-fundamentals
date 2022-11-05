function getDays(date1, date2) {
  //JavaScript actually thinks of time in terms of milliseconds
	return Math.abs(date2 - date1)/86400000
 }

console.log(getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
))

console.log(getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
))
// Dates may not all be in the same month/year.


console.log(getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
))