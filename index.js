class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let dontCapitalize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let splitString = string.split(' ')
    let newString = []

    for (let i = 0; i < splitString.length; i++) {
      if (i == 0) {
        newString.push(this.capitalize(splitString[i]))
      } else {
        if (dontCapitalize.includes(splitString[i])) {
          newString.push(splitString[i])
        } else {
          newString.push(this.capitalize(splitString[i]))
        }
      }
    }
    return newString.join(' ')
  }
}