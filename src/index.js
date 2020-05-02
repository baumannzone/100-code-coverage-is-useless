const isGreaterThanFive = require( './isGreaterThanFive' )

/**
 * Log if the number is greater than 5
 * @param num {Number} The number we are checking
 */
const printNum = ( num ) => {
  console.log( `🤔 Is '${ num }' (${ typeof num }) greater than five? ==> ${ isGreaterThanFive( num ) }` )
}

printNum( 4 )
printNum( 10 )
printNum( '100' )
printNum( null )
printNum( undefined )
printNum()
printNum( false )
printNum( true )
printNum( '' )
