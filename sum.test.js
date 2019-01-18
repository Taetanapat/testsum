const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', function() {
  expect(sum(1,2)).toBe(3);
});

test('20 + 1 เท่ากับ 21', function() {
    expect(sum(20,1)).toBe(21);
});

test('2 + 5 เท่ากับ 7', function() {
    expect(sum(2,5)).toBe(7);
});