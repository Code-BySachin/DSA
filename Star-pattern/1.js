let input = 5;
let space = input - 1;
for (let i = 1; i <= input; i++) {
    str = '';
    function appendStar() {
        for (let j = 1; j <= i; j++) {
            str += '*'
        }
    }
    appendStar();
    for (let k = 1; k <= space; k++) {
        str += '--'
    }
    // for (let l = 1; l <= i; l++) {
    //     str += '*'
    // }
    appendStar();
    space--;
    console.log(str);
}

// Try to make with the functions also if possible.