
const {repeatedWord} =require('../index');

describe('hash Table test', () => {
  it('first test case for repeated word', () => {
    let str1 = 'Once upon a time, there was a brave princess who...';
    expect(repeatedWord(str1)).toBe('a');
  });
  it('second test case for str2', () => {
    let str2= 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(repeatedWord(str2)).toBe('was');
  });
  it('third test case for str3', () => {
    let str3 = 'It was a queer, summer , the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(repeatedWord(str3)).toBe('summer');

  });
  it('4th test case for str4 ', () => {
    let str4 = 'Once upon a time';
    expect(repeatedWord(str4)).toBe('No Repetition');
  });
});
