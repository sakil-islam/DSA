const numbers = [10, 15, 25, 30, 40, 40, 40, 40, 40, 70, 85, 90];
const numbers2 = [90, 85, 70, 65, 55, 50, 40, 35, 25, 20, 15, 10];

function orderAgnosticBinarySearch(arrayOfItems, targetItem) {
	let start = 0;
	let end = arrayOfItems.length - 1;
	let count = 0;
	let mid, asc;
	let foundAt;

	if (arrayOfItems[start] < arrayOfItems[end]) {
		asc = true;
	} else {
		asc = false;
	}

	while (start <= end) {
		mid = Math.floor((start + end) / 2);
		if (arrayOfItems[mid] === targetItem) {
			// count++;
			foundAt = mid;
		}
		if (asc) {
			if (arrayOfItems[mid] < targetItem) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		} else {
			if (arrayOfItems[mid] < targetItem) {
				end = mid - 1;
			} else {
				start = mid + 1;
			}
		}
	}
	if (foundAt != undefined) {
		//console.log(foundAt);
		let i = foundAt;
		while (i <= arrayOfItems.length - 1) {
			if (targetItem === arrayOfItems[i]) {
				count++;
				i++;
			} else {
				i = foundAt - 1;
				break;
			}
		}

		while (i >= 0) {
			if (targetItem === arrayOfItems[i]) {
				count++;
				i--;
			} else {
				break;
			}
		}
		return count;
	}
	// if (foundAt != undefined) {
    //     for (let i = foundAt + 1; i <= arr.length - 1; i++) {
    //         if (target === arr[i]) {
    //             count++;
    //         }
    //     }
    //     for (let i = foundAt; i >= 0; i--) {
    //         if (target === arr[i]) {
    //             count++;
    //         }
    //         else {
    //             break;
    //         }
    //     }
    //     // console.log(foundAt);
    //     return count;
    // }
	return -1;
}

console.log(orderAgnosticBinarySearch(numbers, 40));