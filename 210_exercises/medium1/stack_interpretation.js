/*
INPUT: a formatted string
OUTPUT: integer

RULES/REQUIREMENTS:
- pop value off stack
- add value to reigster,
- operate with second to last register value
- push return to register

- register !== stack
- integer only
- do not modify the stack
- dont handle empty stack 
- dont handle unknown inputs

- stack = [];
- register = 0;

- n: add value to register ??
- PUSH: push copy of value to the stack
- ADD: 
    -- pop another value from stack 
    -- add with second to last value 
    -- return sum to register
- SUB: 
    -- pop another value from stack, 
    -- subtract popped value from the second to last register value
    -- return diff to register
- MULT: 
    -- pop another value from stack
    -- multiple with second to last register value
    -- return diff to register
- DIV: 
    -- pop another value from stack
    -- divide register by popped value
    -- return integer to register
- MOD: 
    -- pop another value from stack
    -- divide register by popped value
    -- return integer remainder to register
- POP: remove from stack and add to register
- PRINT: console.log the last register value


KEY WORDS:
- stack
- register
- result
- operations/tokens


DATA STRUCTURES:
- array -- to process token
- array -- stack
- number -- register
- switchcase (code) -- rules OR 
  store functions in vars

ALGORITHM:
- initialize stack = [];
- initialize register = 0;
- split the token by ' '  to get commands
- process commands
    - if the command is a digit, convert to number and reassign it to the register
    - else call function command
        -- find case and execute associating code
            switch (command) {
              case: 'MULT';
                val1 = stack.pop();
                va12 = register;
                register = val1 * val2;
                break;
            }
        -- execute function command
            result = operations[command]();
            register = result[0];
            stack = result[1];
        -- store command str and functions in an object
            var operations = {
              'MULT': function () {
                val1 = s.pop();
                va12 = r;
                r = val1 * val2;
                return [r, s];
              }
            }

r = 3 
s = [5]

5
3
15
[15, []]
15 
*/


function minilang(str) {
  var stack = [];
  var register = 0; 
  var commands = str.split(' ');
  var result;

  var operations = {
    'PUSH': function () {
      stack.push(register);
      return [register, stack];
    },
    // 'ADD': ,
    // 'SUB': ,
    // 'DIV': ,
    // 'MOD': ,
    'MULT': function () {
      var val1 = stack.pop();
      var val2 = register;
      register = val1 * val2;
      return [register, stack];
    },
    // 'POP': ,
    'PRINT': function () {
      console.log(register);
      return [register, stack];
    },
  }

  commands.forEach(function(command) {
    if (command.match(/[\d]+/)) {
      register = Number(command);
    } else {
      result = operations[command]();
      register = result[0];
      stack = result[1];
    }
  });
}







// TEST CASES

console.log(minilang('PRINT'));
// 0

console.log(minilang('5 PUSH 3 MULT PRINT'));
// 15

// console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// // 5
// // 3
// // 8

// console.log(minilang('5 PUSH POP PRINT'));
// // 5

// console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// // 5
// // 10
// // 4
// // 7

// console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// // 6

// console.log(minilang('4 PUSH PUSH 7 MOD MULT PRINT'));
// // 12

// console.log(minilang('-3 PUSH 5 SUB PRINT'));
// // 8

// console.log(minilang('6 PUSH'));
// // (nothing is printed because the `program` argument has no `PRINT` commands)


// // DIV or MOD with 0 ?? 