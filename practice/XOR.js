function isXor(arg1, arg2) {
  return (!arg1 && !!arg2) ||
         (!!arg1 && !arg2);
}



isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false


isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false







////////////////////////////
// Further Exploration 
////////////////////////////


// Yes, the isXor function does perform a short circuit evaluation. If (!arg1 && !!arg2) is truthy than it does not evaluate line 3. 

// I think using the short circuit here makes sense in that it makes the function slightly more efficent and works for the "exclusive or" because we are evaluating opposites. If the first is true it means the second cannot be. 

// The isXor function could be useful in modeling say a heat pump configuration, which can both cool and heat a space. The cooling systems should be off when the heating systems are on and visa versa, and the isXor function could check which systems are on before performing an action.
