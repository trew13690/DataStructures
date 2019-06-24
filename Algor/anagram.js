function validAnagram(words, words2){
	console.log(words);
	console.log(words2);
	if(words.length !== words2.length){
		return false;
	}
	let wordCounter = {}
	let wordCounter2 = {}

	for(let word of words){
		wordCounter[word] = (wordCounter[word] || 0) + 1;
	}
	for(let word of words2){
		wordCounter2[word] = (wordCounter2[word]|| 0) + 1
    }
    for(let key in wordCounter){
        if(!key in wordCounter2){
            return false
        }
        if(wordCounter2[key] !== wordCounter[key]){
            return false;
        }
    }

	console.log(wordCounter);
	console.log(wordCounter2);
    return true; 
}

console.log(validAnagram('anagram', 'ngaram'))