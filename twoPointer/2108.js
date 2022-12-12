function isPalindrome(str){
	let i = 0;
	let k = str.length - 1;

	while(i <= k){
		if(str[i] != str[k]){
			return false;
		}
		i++;
		k--;
	}
	return true;
}

var firstPalindrome = function(words) {
    for(let i = 0; i< words.length; i++){
        if(isPalindrome(words[i])){
            return words[i];
        }
    }
    return "";
};

