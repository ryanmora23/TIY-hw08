/**
 * 1. create a new repo on Github called TIY-hw08 (08 for the day,
 * 2. add this script file to your index.html and run it in the browser to get the output
 * 3. debug and see the console.log() messages in the chrome dev tools
 */

/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b) {
    "use strict";
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "they are equal";
    }

}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c) {
    "use strict";
    if (a === b || a === c || b === c) {
        return "please use 3 differnet numbers";
    }

    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
    "use strict";
    if (char === "a" || char === "A" || char === "e" || char === "E" || char === "i" || char === "I" || char === "o" || char === "O" || char === "u" || char === "U") {
        return true;
    } else {
        return false;
    }
}

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(text) {
    "use strict";


}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array) {
    for (var i = 0, add = 0; i < array.length; i++) {
        add += array[i];
    }
    return add;
}

function multiply(array) {
    "use strict";
    for (var i = 0, times = 1; i < array.length; i++) {
        times *= array[i];
    }
    return times;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse() {
    "use strict";

}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words) {
    "use strict";
    for (var i = 0, count = 0, longWord = ""; i < words.length; i++) {
        if (words[i].length > count) {
            count = words[i].length;
            longWord = words[i];
        }
    }
    return longWord;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i) {
    "use strict";
    for (var p = 0, longWords = ""; p < words.length; p++)
    {
        if(words[p].length > i)
        {
            longWords= longWords + " " + words[p];
        }
    }
    return longWords;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
    "use strict";
    //...
}
