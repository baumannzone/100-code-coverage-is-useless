const isGreaterThanFive = require( './isGreaterThanFive' )

/**
 * Log if the number is greater than five
 * @param num {Number} The number we are checking
 */
const printNum = ( num ) => {
  console.log( `Is '${ num }' (${ typeof num }) greater than five?: ${ isGreaterThanFive( num ) }` )
}

printNum( 4 )
printNum( 10 )
printNum( null )
printNum( undefined )
printNum()
printNum( '' )
printNum( '100' )
printNum( false )
