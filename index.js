class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }
  
  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  
  static titleize(string) {
     let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
     string = this.capitalize(string)
     let stringArr = string.split(' ')
     stringArr = stringArr.map(word => {
       if (!exceptions.includes(word)){
         word = this.capitalize(word)
       }
       return word
     })
     return stringArr.join(' ')
  }
}