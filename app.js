// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
    
   
}

const fromDollarToEuro = 1/1.2;

//Dollar to Yen function
const fromDollartoYen = function(valueInDollar){
    let valueInYen = fromDollarToEuro * valueInDollar * 127.9;
    return valueInYen
}

const fromYenToEuro = 1/127.9;

// //Yen to Pound function
 const fromYenToPound =function(valueInYen){
    let valueInPound = fromYenToEuro * valueInYen * 0.8;
    return valueInPound

 }


console.log(fromDollartoYen(1))
console.log(fromYenToPound(1))

module.exports = { fromEuroToDollar, fromYenToEuro, fromDollartoYen, fromYenToPound, fromDollartoYen, fromDollarToEuro }