class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string){
    let dontCapitalize = ['a', 'an', 'but', 'of', 'for', 'at', 'by', 'from', 'the', 'and']
    string = Formatter.capitalize(string)
    let splitString = string.split(' ')
    splitString = splitString.map(word => {
      if (!dontCapitalize.includes(word)){
        word = Formatter.capitalize(word)
      }
      return word
    })
    return splitString.join(' ')
  }
}
