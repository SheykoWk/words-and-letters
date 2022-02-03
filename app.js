const wordsAndLetters = (words, letters) => {
    //Is a dictionary that save all the letters
    /*
     {a: 1, h: 1, l: 2, e: 1, o: 1, g: 1, k: 1 }
    */
    const letterInventory = {};

    //this constant save all the words that has all the letters
    const correctWords = [];

    const lettersNeededForWord = (word) => {
        const count = {};
        for (let letter of word) {
            if (count[letter]) {
                count[letter] += 1;
            } else {
                count[letter] = 1;
            }
        }
        return count;
    };

    for (let letter of letters) {
        if (letterInventory[letter]) {
            letterInventory[letter] += 1;
        } else {
            letterInventory[letter] = 1;
        }
    }

    const isACorrectWord = (word, currentInventory) => {
        const needed = lettersNeededForWord(word);
        let canI = true;
        Object.keys(needed).forEach((letter) => {
            if (
                !currentInventory[letter] ||
                needed[letter] > currentInventory[letter]
            ) {
                canI = false;
            }
        });
        return canI;
    };
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (isACorrectWord(word, letterInventory)) {
            correctWords.push(word);
        }
    }
    const wordLength = correctWords.map((word) => word.length);
    const max = Math.max(...wordLength);
    return max;
};

exports.wordsAndLetters = wordsAndLetters;
