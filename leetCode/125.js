// 125. Valid Palindrome

function isPalindrome(s){
	// let str = s.toLowerCase().replace(/\s+|\W/g, '');
	let str = s.replace(/[^A-Z0-9]+/gi, "").toUpperCase();
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
console.log(isPalindrome("race a car"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome(" "));
console.log(isPalindrome("ab_a"));