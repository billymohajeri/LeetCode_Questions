var containsDuplicates = function(nums){
    seen = new Set
    for(let num of nums){
        if (seen.has(num)) return true
        seen.add(num)
    }
    return false
}



console.log(containsDuplicates([1,2,3,4]));