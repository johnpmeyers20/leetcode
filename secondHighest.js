var secondHighest = function(s) {
  let highest = '';
  let secondHighest = '';
  for (let i = 0; i < s.length; i++) {
    const curr = Number(s[i])
    if (curr || curr === 0) {
      if (highest === '') {
        highest = curr;
      }
      else {
        if (curr > highest) {
          secondHighest = highest;
          highest = curr;
        }
        else {
          if (secondHighest === '' && curr < highest) {
            secondHighest = curr;
          }
          else {
            if (curr < highest && curr > secondHighest) {
              secondHighest = curr;
            }
          }
        }
      }
    }
  }
  console.log('highest', highest);
  console.log('secondHighest', secondHighest);
  return secondHighest === '' ? -1 : secondHighest;
};