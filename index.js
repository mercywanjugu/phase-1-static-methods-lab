class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1,)
  }
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize(str) {
    let strr = str.split(' ')
    let newSent = strr.map(function(word) {
    if (word === 'the') { return word }
    else if (word === 'a')  { return word }
    else if (word === 'an')  { return word }
    else if (word === 'but') { return word }
    else if (word === 'of')  { return word }
    else if (word === 'and')  { return word }
    else if (word === 'for') { return word }
    else if (word === 'at') { return word }
    else if (word === 'by') { return word }
    else if (word === 'from') { return word }
    else { return word.charAt(0).toUpperCase() + word.slice(1,) }

    //the, a, an, but, of, and, for, at, by, and from
    })
    let newWord = ""
    for (let i=0; i < newSent.length; i++) {
      newWord += newSent[i]
      if (i !== (newSent.length - 1)) { newWord += " " }
    }
    newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1,)
    return newWord
  }
}

let a = Formatter.titleize("a tale of two cities")
console.log(a)