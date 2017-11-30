var arrayTasks = {

	concat: function (arr1, arr2) {
		arr1.push.apply(arr1, arr2);
		return arr1;

        // could have done return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var newArray = [];

		arr.forEach(function(element){
			newElement = element * element;
			newArray.push(newElement);
		})

		return newArray;

		//could have done
		// var newArray = arr.map(function(element){
		// return element * element;
        //
		// })
	},

	sum: function (arr) {
		return arr.reduce(function(acc, currentValue) {
			 return acc + currentValue;
		 }, 0);
	},

	findDuplicates: function (arr) {
		var newArray = [];
		//should probably sort first then do the for each but the test is already sorted
		// arr.forEach(function(element, index){
		// 	if(arr.indexOf(element, index + 1) > - 1){
		// 		if(newArray.indexOf(element) === -1){
		// 			newArray.push(element);
		// 		}
		// 	}
		// });
        //
		// return newArray;

// alternate solution
		// return arr.filter(function(item, index){
		// 	var restOfArrayIncludes = arr.slice(index+1).includes(item);
		// 	var isFirstInstance = arr.indexOf(item) === 1;
		// 	return restOfArrayIncludes && isFirstInstance;
		// })

// alternate
		var tempArray = [];
		for(var item of arr){
			if(arr.includes(item, item) && !tempArray.includes(item)){
				tempArray.push(item);
			}
		}
		return tempArray;

	},

	removeAndClone: function (arr, valueToRemove) {
		var newArray = [];

		arr.forEach(function(element, index){
			if(element === valueToRemove){
				newArray.push(element);
				arr.splice(index, 1)
			}
		})

		return arr;
	},

	findIndexesOf: function (arr, itemToFind) {
		var newArray = [];

		arr.forEach(function(element, index){
			if(element === itemToFind){
				newArray.push(index);
			}
		})

		return newArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var total = 0;

		arr.forEach(function(element, index){
			if(element % 2 == 0){
				total += element * element;
			}
		})

		return total;
	}

}

module.exports = arrayTasks
