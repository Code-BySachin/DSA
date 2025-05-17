//Check odd or even and reverses it if odd
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
// Search and separate words
function Search(str) {
    // str=str.trim();
    let word = ''
    let words = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            words += ReverseOddString(word) + '-';
            word = ''
        } else word += str[i];
    }
    if (word) {
        words += ReverseOddString(word);
    }
    console.log(words);

    // ReverseString(str);
}
Search("one two three four");
Search("make sure uoy only esrever sdrow of ddo length");