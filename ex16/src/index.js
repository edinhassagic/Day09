function checkSign(num) {
    return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";

}
console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));
module.exports = checkSign;