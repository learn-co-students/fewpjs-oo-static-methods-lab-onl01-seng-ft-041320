class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let capString = this.capitalize(string)
    let excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let stringArray = capString.split(" ")
    return stringArray.map(string => {
      if (excludedWords.includes(string)) {
        return string
      } else {
        return this.capitalize(string)
      }
    }).join(" ")
  }
}