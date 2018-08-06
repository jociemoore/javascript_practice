// Example 1 - Identify Use Cases

var countries = ['Australia', 'Cuba', 'Senegal'];

alphaInsert(countries, 'Brazil');

console.log(countries.join(', '));


alphaInsert([], 'Brazil');              // Empty Array
alphaInsert(['Brazil'], 'Australia');   // Beginning of array
alphaInsert(['Brazil'], 'Cuba');        // End of array
alphaInsert(['Brazil'], 'Brazil');      // Duplicate entry