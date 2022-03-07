/**
 * Creates a new array of strings from a given array of strings,
 *  by moving the final element to the front
 *
 * @param stringArr array of strings
 * @returns a new array of strings
 */
const moveLastStringToFront = (stringArr: string[]): string[] => {
  const lastIndex = stringArr.length - 1;
  const lastElement = stringArr[lastIndex];
  const resultArr = [lastElement];

  // iterate up to, and EXCLUDING, lastIndex
  for (let index = 0; index < lastIndex; index++) {
    const targetElement = stringArr[index];
    resultArr.push(targetElement);
  }

  return resultArr;
}

export default moveLastStringToFront;
