const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    // console.log(horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    let str = '';
    let vertical = [];

    for (let x = 0; x < letters[0].length; x++) {
      for (let y = 0; y < letters.length; y++) {
        str += letters[y][x];
      }
      vertical.push(str);
      str = '';
    }

    for (l of vertical) {
      if (l.includes(word)) return true
    }
  return false;
}

module.exports = wordSearch;