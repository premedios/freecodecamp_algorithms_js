var expect = require('chai').expect;
var reverseString = require('../reverse_string');

describe('Reverse String Algorithm', () => {
  it('should return a string', () => {
    var reversedString = reverseString.reverseString("hello");
    expect(reversedString).to.be.an("string");
  });

  it('should return "olleh"', () => {
    var reversedString = reverseString.reverseString("hello");
    expect(reversedString).to.eq("olleh");
  });

  it('should return "ydwoH"', () => {
    var reversedString = reverseString.reverseString("Howdy");
    expect(reversedString).to.eq("ydwoH");
  });

  it('should return "htraE morf sgniteerG"', () => {
    var reversedString = reverseString.reverseString("Greetings from Earth");
    expect(reversedString).to.eq("htraE morf sgniteerG");
  });
})
