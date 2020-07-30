class Formatter {
  //add static methods here

  static capitalize(string) {
    // return string.charAt(0)
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    // removes any non alpha-numeric characters 
    // except dash and single quotes (apostrophes)
    // return string.replace(/[^A-Za-z0-9-']+/g, '')
    // all non-alphanumeric characters 
    // except for dashes, single quotes and spaces
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let words = string.split(' ')
    let exception = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newArrayOfWords = []
    for (let i = 0; i < words.length; i++) {
      if (i == 0) {
        newArrayOfWords.push(this.capitalize(words[i]))
      } else {
          if (exception.includes(words[i])) {
          newArrayOfWords.push(words[i])
          } else {
          newArrayOfWords.push(this.capitalize(words[i]))
          }
        } 
      
    }
    return newArrayOfWords.join(" ")
  }
}