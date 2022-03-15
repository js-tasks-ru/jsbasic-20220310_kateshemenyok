function checkSpam(str, spam = ["1xBet", "XXX"]) {
  for (let i = 0; i < spam.length; i++) {
    if (str.toLowerCase().indexOf(spam[i].toLowerCase()) !== -1) {
      return true;
    }
  }

  return false;
}
