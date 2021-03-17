function myForLoop1() {
    var evenNumbers = 0;
while (evenNumbers < 9) {
  if (evenNumbers % 2 == 0)
    console.log(evenNumbers);
  evenNumbers++;
}

}

console.log(myForLoop1());

module.exports =  { 
    myForLoop1,
    myForLoop2 }