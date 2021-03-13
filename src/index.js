module.exports = function reverse (n) {
  let str = String(n);
  let reverseStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[str.length-i-1] != "-") {
        reverseStr = reverseStr + str[str.length-i-1];
    }
  }
  return +reverseStr;
}
