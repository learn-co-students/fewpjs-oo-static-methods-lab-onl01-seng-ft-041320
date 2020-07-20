class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    let arr= string.split(" ");
    let badwords= ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let result= [];

    for (let n=0; n < arr.length; n++){
      if (n == 0){
        result.push(this.capitalize(arr[n]))}
      else {
        if (badwords.includes(arr[n])){
          result.push(arr[n])}
        else {
          result.push(this.capitalize(arr[n]))}
        }
        }
      return result.join(" ");
      }
    }
