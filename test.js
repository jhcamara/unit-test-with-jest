// // import the function sum from the app.js file
// const { sum } = require('./app.js');

// // start your first test
// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });
// // one euro is:
// let oneEuroIs = {
//     "JPY": 127.9, // japan yen
//     "USD": 1.2, // us dollar
//     "GBP": 0.8, // british pound
// }
// 1 EUR (Euro) = 1.2 USD (US Dollar)

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

//Testing Dollar to Yen function
test("One dollar should be 106.58 Yen", function(){
  
    const { fromDollartoYen, fromDollarToEuro } = require('./app.js')

   
    const yen = fromDollartoYen(1)

   
    const expected1 = 1 * fromDollarToEuro * 127.9; 
    
  
     expect(yen).toBe(expected1); 
})


//Testing Yen to Pound function

test("One Yen should be 0.00625 Pound", function(){
  
    const { fromYenToPound, fromYenToEuro } = require('./app.js')

   
    const pound = fromYenToPound(1)

   
    const expected2 = 1 * fromYenToEuro * 0.8; 
    
  
     expect(pound).toBe(expected2); 
})