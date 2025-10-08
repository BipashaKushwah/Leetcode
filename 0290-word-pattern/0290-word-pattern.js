var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    // Create prototype-less maps
    const charToWord = Object.create(null);
    const wordToChar = Object.create(null);

    for (let i = 0; i < pattern.length; i++) {
        const ch = pattern[i];
        const word = words[i];

        if (charToWord[ch] && charToWord[ch] !== word) return false;
        if (wordToChar[word] && wordToChar[word] !== ch) return false;

        charToWord[ch] = word;
        wordToChar[word] = ch;
    }

    return true;
};

