/**
    Let's take the same array, but this time sorted
    from which we will have to find one specific number.
*/

const arr = [10, 15, 25, 30, 40, 45, 50, 55, 60, 65, 70, 85, 90];

/**
    As like as before we will define a function with 2 parameters
*/

function floorCeiling(arrayOfItems, itemToFind) {
	let start = 0;
	let end = arrayOfItems.length - 1;
	let mid;
    let checkAscDsc;
    if(arr[start] < arr[end]){
      checkAscDsc = true
    }else{
      checkAscDsc = false
    }
	/**
		We have taken three variables to store starting index, ending index and 
		one for to store the middle index.
		Then we will create a while loop, which will iterate through the following 
		code until the target item is found or the value of start index become equal
		to the end index.
	*/
	while (start <= end) {
		// in every iteration we will recalculate the mid value,
		// from the reduced search window.
		mid = Math.floor((end + start) / 2);
		if(checkAscDsc){
            if (arrayOfItems[mid] === itemToFind) {
                /** 
                  when the value of the mid is equal to the targeted item, that means
                    we have found our item.
                */
                return "Index of the item: " + mid;
            } else if (arrayOfItems[mid] > itemToFind) {
                /** 
                  if the target items value is less than the mid items value, then we will 
                    change	the end variables value. So that the next iteration only 
                    happens at the left of the mid value.
                */
                end = mid - 1;
            } else {
                /** 
                  if the target items value is greater than the mid items value,
                    then we will change the start variables value. So that the next
                    iteration only happens at the left of the mid value.
                */
                start = mid + 1;
            }
        }
        else{
            if (arrayOfItems[mid] === itemToFind) {
                /** 
                  when the value of the mid is equal to the targeted item, that means
                    we have found our item.
                */
                return "Index of the item: " + mid;
            } else if (arrayOfItems[mid] < itemToFind) {
                /** 
                  if the target items value is less than the mid items value, then we will 
                    change	the end variables value. So that the next iteration only 
                    happens at the left of the mid value.
                */
                end = mid - 1;
            } else {
                /** 
                  if the target items value is greater than the mid items value,
                    then we will change the start variables value. So that the next
                    iteration only happens at the left of the mid value.
                */
                start = mid + 1;
            }
        }
	}
	/**
		when start and end variables value becomes equal the loop ends. And
		that means the targeted item doesn't exist in the given array.
	*/
	console.log(mid);
	if (arrayOfItems[mid] > itemToFind) {
		return "Floor: " + arrayOfItems[mid - 1] + " Ceiling: " + arrayOfItems[mid];
	} else {
		return "Floor: " + arrayOfItems[mid] + " Ceiling: " + arrayOfItems[mid + 1];
	}
}

/**
  Now we will call the function and will pass our numbers' array
	and a desired number (suppose 45) as arguments to find from that array.
 */

//console.log(binarySearch(numbers, 45)); //output: Index of the item: 5

/**
  Now let's try to search for a number 
  which is not present in our array
 */

console.log(floorCeiling(arr, 77)); //output: Item not found