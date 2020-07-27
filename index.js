class Formatter {
  
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'-' ']+/g, '');
  }

  static titleize (string){
    let dontCapitalize = ['a', 'an', 'but', 'of', 'for', 'at', 'by', 'from', 'the', 'and']
    
    string = this.capitalize(string)
    let stringArray = string.split(' ')
    stringArray = stringArray.map(word =>{
      if(!dontCapitalize.includes(word)){
        word = this.capitalize(word)
      }
      return word
    })
    return stringArray.join(' ')
  }

}