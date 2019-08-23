const isGreaterThanFive = require( './isGreaterThanFive' )

/**
 * Log if the number is greater than five
 * @param num {Number} The number we are checking
 */
const printNum = ( num ) => {
  console.log( `Is ${ num } greater than five?: ${ isGreaterThanFive( num ) }` )
}

printNum( 10 )
printNum( 4 )
printNum()
