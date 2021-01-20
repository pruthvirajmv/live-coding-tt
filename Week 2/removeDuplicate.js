var removeDuplicates = function(nums) {  
    for(i=0; i < nums.length;){
        if( nums[i] == nums[i+1]){
            for(j=i+1; j < nums.length-1; j++){
                nums[j] = nums[j+1]
            }
            nums.length = nums.length - 1;
        }  
        else  i++;
    }
    return nums.length; 
};

var nums = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(nums);
console.log(nums);

