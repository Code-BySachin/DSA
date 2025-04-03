
function ReverseOddString(str) {
    let newStr = "";
    if (str.length % 2 !== 0) {

        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        }
    }else return str
    // console.log(newStr);
    return newStr;

}
function ReverseOddLengthString(str) {
    // search and separate
    str=str.trim();
    let word = ''
    let words = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            words += ReverseOddString(word) + ' ';
            word = ''
        } else word += str[i];
    }
    if (word) {
        words += ReverseOddString(word);
    }
    console.log(words);

    // ReverseString(str);
}
ReverseOddLengthString("one two three four");
ReverseOddLengthString("make sure uoy only esrever sdrow of ddo length");