import test from 'ava'

const isGreaterThanFive = require( '../src/isGreaterThanFive' )

test( 'Number 6 is greater than 5', t => {
  const num = 6
  const result = isGreaterThanFive( num )
  t.is( result, true )
} )

test( 'Number 4 is smaller than 5', t => {
  const num = 4
  const result = isGreaterThanFive( num )
  t.is( result, false )
} )