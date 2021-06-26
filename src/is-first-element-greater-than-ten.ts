function isFirstElementGreaterThanTen(nums: number[]): boolean {
  const firstElement = nums[0];
  if (firstElement > 10) {
    return true;
  } else {
    return false;
  }
}

export default isFirstElementGreaterThanTen;
