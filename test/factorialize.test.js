var expect = require('chai').expect;
var factorialize = require('../src/factorialize');

describe('Factorialize A Number', () => {
  it('should return a number', () => {
    var factorializedNumber = factorialize.factorialize(5);
    expect(factorializedNumber).to.be.a('number');
  });

  it('should return 120', () => {
    var factorializedNumber = factorialize.factorialize(5);
    expect(factorializedNumber).to.eq(120);
  });

  it('should return 3628800', () => {
    var factorializedNumber = factorialize.factorialize(10);
    expect(factorializedNumber).to.eq(3628800);
  });

  it('should return 2432902008176640000', () => {
    var factorializedNumber = factorialize.factorialize(20);
    expect(factorializedNumber).to.eq(2432902008176640000);
  });

  it('should return 1', () => {
    var factorializedNumber = factorialize.factorialize(0);
    expect(factorializedNumber).to.eq(1);
  });
})
