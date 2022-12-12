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

console.log(isPalindrome('madam'));
console.log(isPalindrome('raceacar'));
console.log(isPalindrome('wow'));
console.log(isPalindrome('mom'));
console.log(isPalindrome('dad'));
console.log(isPalindrome('sakil'));