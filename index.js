class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = string.split(" ")
    arr[0] = Formatter.capitalize(arr[0])
    return arr.map( function(e) {
      if ( !exceptions.some( word => word === e ) ) {
        return Formatter.capitalize(e)
      } else {
        return e
      }
    }).join(" ")
  }
}