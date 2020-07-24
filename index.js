class Formatter {
  static capitalize (string) {
    let capLetter = string[0].toUpperCase()
    return capLetter + string.slice(1);
  }

  static sanitize (string) {
    return string.replace(/[^\w '-]/g, "");
  }

  static titleize(string) {
    let splitStr = string.split(' ');
    let capArr = splitStr.map(function(word) {
      if (word === splitStr[0]) {
        let cap = word[0].toUpperCase();
        return cap + word.slice(1);
      } else if (word !== 'a' && word !== 'an' && word !== 'but' && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from' && word !== 'the') {
        let cap = word[0].toUpperCase();
        return cap + word.slice(1);
      } else {
        return word;
      }
    })
    return capArr.join(' ')
  }
}