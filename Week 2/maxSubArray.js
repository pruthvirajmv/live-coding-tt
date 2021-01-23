var maxSubArray = function(nums) {
    if(nums.length == 1) return nums[0];
    let largeSum = nums[0];
    for(let i=0;i<nums.length;i++){
        let sum = nums[i];
        largeSum = sum > largeSum? sum : largeSum;
        for(let j=i+1; j < nums.length; j++){
          sum += nums[j];
          largeSum = sum > largeSum? sum : largeSum;
        }
        
    }
    return largeSum;
};


var nums = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(nums));