const commonCharacters = require('./commonCharacters.js');

describe('commonCharacters', function() {
  console.log(commonCharacters, "this should be a function");

  it('should be a function', function() {
    expect(typeof(commonCharacters)).toBe('function');

  });

  it('should return something', function() {
    var result = commonCharacters('i am a string', 'i am also a string');
    expect(result).not.toBe(undefined);

  });

  it('should not return an Array', function() {
    // your function is returning an array instead of a string
    var result = commonCharacters('vicapow', 'wopaciv');
    expect(typeof(result)).not.toBe('array');
  });

  it('should return a string', function() {
    var string1 = 'i have made a huge mistake';
    var string2 = 'have any of you ever even seen a chicken';
    var result = commonCharacters(string1, string2);
    expect(typeof(result)).toBe('string');
  });

  it('should return common characters for simple strings', function() {
    // the common characters between 'abc' and 'abc' should be 'abc'
    expect(commonCharacters('abc', 'abc')).toEqual('abc');
    // the common characters between 'ab' and 'bc' should be 'b'
    expect(commonCharacters('ab', 'bc')).toEqual('b');
  });

  it('should return the common characters in the order they appear', function() {
    var result = commonCharacters('zyx', 'xzy');
    // the resulting common character string should be sorted in the order the
    // characters appear (not alphabetically)
    expect(result).toEqual('zyx');
  });

  it('should return the original string for repeated versions of a characters', function() {
    var result = commonCharacters('aeiou', 'aaeeiioouu');
    // the common characters between 'aeiou' and 'aaeeiioouu' shold be 'aeiou'

    expect(result).toEqual(result, 'aeiou');

  });

  it('should return "" if the first string is ""', function() {
    var result = commonCharacters('', 'eiauo');
    expect(result).toEqual('');
  });

  it('should return the common characters for this anagram', function() {
    var string1 = 'all boys love fudge';
    var string2 = 'boys all love fudge';
    var result = commonCharacters(string1, string2);
    // the common characters between 'all boys love fudge' and 'boys all love
    // fudge' should be 'alboysvefudg'
    // result.should.equal(result, 'alboysvefudg');
    expect(result).toEqual(result, 'alboysvefudg');


  });

  it('should return an empty string when comparing two empty strings', function() {
    // an edge case to watch out for. Its possible someone could try to compare
    // the common strings among two empty strings.
    expect(commonCharacters('', '')).toEqual('');
  });

  it('Extra Credit: should return common characters between more than two strings', function() {
    // if you've gotten this far, you're doing really great! this bit addresses
    // the extra credit of allowing more than two strings as input
    var result = commonCharacters('qwerty', 'wertyu', 'ertyui', 'rtyui'
      , 'tyuiop', 'yuiopa');
    // the only common character among all these strings should be just 'y'
    expect(result).toEqual('y');
  });

});
