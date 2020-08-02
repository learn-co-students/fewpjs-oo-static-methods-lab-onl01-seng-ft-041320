class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let exclusions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    string = Formatter.capitalize(string)
    let splitString = string.split(" ")
    const newArr = []
    splitString.map(word => {
      if (!exclusions.includes(word)) {
        word = Formatter.capitalize(word)
      }
      newArr.push(word)
      return newArr
    })
    return newArr.join(" ")
  }
}
