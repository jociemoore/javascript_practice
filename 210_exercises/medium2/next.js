/*
INPUT: integer
OUTOUT: integer

RULES:
- output
    -- odd number
    -- multiple of 7
    -- digit occur once only
- return the next featured number greater than the input
- if length is greater than 10 or the input is not a number, return error message

KEY WORDS: 
- featured number

DATA STRUCTURES:
- number -- testing
- string -- testing


ALGORITHM:
- initialize errorMsg
- guard clause
    -- if length is greater than 10 or the input is not a number, return error message
- iterate with a for loop, adding 1 each time, starting with input + 1, while i < 10000000000
    -- if isFeaturedNum, return i
        -- isOdd: i % 2 === 1
        -- isMultipleOfSeven: i % 7 === 0
        -- hasNoRepeatingDigits: 
            -- String(i).match(/^[\d]+$/)
- return errorMsg
*/







// TEST CASES

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987

featured(-1);           // 7
featured(-8);           // -7
featured(0);            // 7
featured();             // 7
featured(null);         // 'Sorry, could not find the next featured number'
featured(Infinity);     // 'Sorry, could not find the next featured number'
featured('a');          // 'Sorry, could not find the next featured number'


// fractions??


