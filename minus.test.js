const minus = require('./minus');

test('2 - 1 เท่ากับ 1',  ()=> {
    expect(minus(2,1)).toBe(1);
});

test('10 - 5 เท่ากับ 0', function (){
    expect(minus(10,5)).toBe(5);
});

test('15 - 7 เท่ากับ 8', function (){
    expect(minus(15,7)).toBe(8);
});

test('1 - 7 เท่ากับ -6', function (){
    expect(minus(1,7)).toBe(-6);
});


test('10 - 20 เท่ากับ -10', function (){
    expect(minus(10,20)).toBe(-10);
});