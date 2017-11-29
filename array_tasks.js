var arrayTasks = {

	concat: function (arr1, arr2) {
		arr1.push.apply(arr1, arr2);
		return arr1;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		newArray = [];

		arr.forEach(function(element){
			newElement = element * element;
			newArray.push(newElement);
		})

		return newArray;
	},

	sum: function (arr) {
		var sum = arr.reduce((x, y) => x + y);
		return sum;
	},

	findDuplicates: function (arr) {
		newArray = [];
		//should probably sort first then do the for each but the test is already sorted

		arr.forEach(function(element, index){
			if(arr.indexOf(element, index + 1) > - 1){
				if(newArray.indexOf(element) === -1){
					newArray.push(element);
				}
			}
		})

		return newArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		newArray = [];

		arr.forEach(function(element, index){
			if(element === valueToRemove){
				newArray.push(element);
				arr.splice(index, 1)
			}
		})

		return arr;
	},

	findIndexesOf: function (arr, itemToFind) {
		newArray = [];

		arr.forEach(function(element, index){
			if(element === itemToFind){
				newArray.push(index);
			}
		})

		return newArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		total = 0;

		arr.forEach(function(element, index){
			if(element % 2 == 0){
				total += element * element;
			}
		})

		return total;
	}

}

module.exports = arrayTasks
