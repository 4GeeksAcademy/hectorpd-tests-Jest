test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')

    expect(fromEuroToDollar(3.5)).toBe(4.2);
})
test("One dollars should be 127.9 yen", function(){
    
    const { fromDollarToYen } = require('./app.js')
    
    expect(fromDollarToYen(5)).toBe(639.5);
})
test("One yen should be 0.8 pounds", function(){
    
    const { fromYenToPound } = require('./app.js')

    expect(fromYenToPound(4)).toBe(3.2);
})