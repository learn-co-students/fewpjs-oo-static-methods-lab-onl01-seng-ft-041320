class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'-' ']+/g, '');
  }

  static titleize(string) {
    let nonCapitalize = ['a', 'an', 'but', 'of', 'for', 'at', 'by', 'from', 'the', 'and']
    string = this.capitalize(string)
    let stringArray = string.split(' ')
    stringArray = stringArray.map(word => {
      if (!nonCapitalize.includes(word)) {
        word = this.capitalize(word)
      }
      return word
    })
    return stringArray.join(' ')
  }
}