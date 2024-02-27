// Set Data Structure

// var containsDuplicate = function (nums) {
//   seen = new Set();
//   for (let num of nums) {
//     if (seen.has(num)) return true;
//     seen.add(num);
//   }
//   return false;
// };

var containsDuplicate = function (nums) {
  myHash = {};
  for (num of nums) {
    if (myHash[num] === undefined) {
      myHash[num] = 1;
    } else return true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 8]));
module.exports = containsDuplicate;
