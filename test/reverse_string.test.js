var expect = require('chai').expect;
var algorithm1 = require('../algortihm1');

describe('Reverse String Algorithm', () => {
  it('should return a string', () => {
    var reversedString = algorithm1.reverseString("hello");
    expect(reversedString).to.be.an("string");
  });

  it('should return "olleh"', () => {
    var reversedString = algorithm1.reverseString("hello");
    expect(reversedString).to.eq("olleh");
  });

  it('should return "ydwoH"', () => {
    var reversedString = algorithm1.reverseString("Howdy");
    expect(reversedString).to.eq("ydwoH");
  });

  it('should return "htraE morf sgniteerG"', () => {
    var reversedString = algorithm1.reverseString("Greetings from Earth");
    expect(reversedString).to.eq("htraE morf sgniteerG");
  });
})
