const sum = nums => {
  let sum = 0
  for (i in nums) {
    sum += nums[i]
  }
  console.log("Sum is :" + sum)
}
module.exports = sum
