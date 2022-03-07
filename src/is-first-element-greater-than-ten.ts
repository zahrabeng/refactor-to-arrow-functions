/**
 * Check whether the first element in an array of numbers is greater than 10 or not
 * @param nums array of numbers
 * @returns whether the first element in `nums` is greater than 10
 */
const isFirstElementGreaterThanTen = (nums: number[]): boolean => {
  const firstElement = nums[0];
  if (firstElement > 10) {
    return true;
  } else {
    return false;
  }
}

export default isFirstElementGreaterThanTen;
