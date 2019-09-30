// check if a word entered is an isogram
/*
function isIsogram(word) {
    if (typeof word !== 'string') {
        return 'Argument should a string';
    }
    if (word == '') {
        return false;
    } else {
        var str = word.toLowerCase();
        for (var i = 0; i < str.length; i++) {
            if (charAt[i] > 1) {
                return false;
            } else {
                return true;
            }
        }
    }
} */

function isIsogram(word) {
    var str = word.toLowerCase();
    letter = Object.create(null), i;
    //
    if (typeof word !== 'string') {
        return 'Argument should be a string';
    }
    if (word === '') {
        return false;
    }
    for (i = 0; i < str.length; i++) {
        if (letter[str[i]]) {
            return false;
        }
        letter[str[i]] = true;
    }
    return true;
}

// function test
console.log(isIsogram('Egyptian'));