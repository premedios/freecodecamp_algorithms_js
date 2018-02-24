var expect = require('chai').expect;
var palindrome = require('../palindrome');

describe('Check for Palindromes', () => {
  it('should return a boolean', () => {
    var isPlaindrome = palindrome.palindrome("eye");
    expect(isPlaindrome).to.be.a("boolean");
  });

  it('should return true for "eye"', () => {
    var isPalindrome = palindrome.palindrome("eye");
    expect(isPalindrome).to.be.eq(true);
  });

  it('should return true for "_eye"', () => {
    var isPalindrome = palindrome.palindrome("_eye");
    expect(isPalindrome).to.be.eq(true);
  });

  it('should return false for "not a palindrome"', () => {
    var isPalindrom = palindrome.palindrome("not a palindrome");
    expect(isPalindrom).to.be.eq(false);
  });

  it('should return true for "A man, a plan, a canal. Panama"', () => {
    var isPalindrome = palindrome.palindrome("A man, a plan, a canal. Panama");
    expect(isPalindrome).to.be.eq(true);
  });
})
