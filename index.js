class Formatter {
  static capitalize(string) {
    // the character at the index of 0 (first letter) to uppercase, plus the rest of the characters
    //    cat   => c     =>    C        => C + at   === Cat
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    // regex = if not characters A-Z, a-z, 0-9, a dash(-), an apostrophe('), or a whitespace(/s),
    // replace them with ''(nothing)
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string){
    // don't capitalize any of these words
    let dontCapitalize = ['a', 'an', 'but', 'of', 'for', 'at', 'by', 'from', 'the', 'and']
    // first word is always capitalized regardless of if it is in the above array
    string = Formatter.capitalize(string)
    // split on spaces to make array of individual words
    let splitString = string.split(' ')
    //iterate through the words
    splitString = splitString.map(word => {
      // if the word isn't in the list of words not to capitalize
      if (!dontCapitalize.includes(word)){
        // capitalize it
        word = Formatter.capitalize(word) 
      }
      // return the word
      return word
    })
    // turn array of words back into a string
    return splitString.join(' ')
  }
}
