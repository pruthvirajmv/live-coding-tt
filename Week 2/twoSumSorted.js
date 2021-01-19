var twoSum = function(numbers, target) {
    
    for(let i = 0, j = (numbers.length-1); i<j;){
        if(numbers[i] == target - numbers[j]) return [i+1,j+1];
        else if (numbers[i] < target - numbers[j]) i++;
        else j--;     
    }
    
};

console.log(twoSum([4,3,2,5,7],6)); 