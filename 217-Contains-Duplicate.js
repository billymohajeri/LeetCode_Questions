var containsDuplicate = function(nums){
    seen = new Set
    for(let num of nums){
        if (seen.has(num)) return true
        seen.add(num)
    }
    return false
}



module.exports = containsDuplicate;
