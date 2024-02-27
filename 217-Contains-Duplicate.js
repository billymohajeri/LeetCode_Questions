// Set Data Structure

// var containsDuplicate = function (nums) {
//   seen = new Set();
//   for (let num of nums) {
//     if (seen.has(num)) return true;
//     seen.add(num);
//   }
//   return false;
// };

// Hash Table
var containsDuplicate = function (nums) {
  const myHash = {};
  for (const num of nums) {
    if (myHash[num]) {
      return true;
    } else myHash[num] = 1;
  }
  return false;
};

module.exports = containsDuplicate;
