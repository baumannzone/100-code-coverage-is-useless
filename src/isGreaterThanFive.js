/**
 * Returns true if number is greater than 5
 * @param num {Number} Number to evaluate
 * @returns {boolean}
 */
const isGreaterThanFive = ( num ) => {
  if ( num >= 5 ) {
    return true
  } else {
    return false
  }

  // I know there is a simple version 😜:
  // return num >= 5;
}

module.exports = isGreaterThanFive
