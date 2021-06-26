const swapIndices = (str: string, idxOne: number, idxTwo: number): string => {
  let resultStr = "";
  for (let index = 0; index < str.length; index++) {
    if (index === idxOne) {
      resultStr += str[idxTwo];
    } else if (index === idxTwo) {
      resultStr += str[idxOne];
    } else {
      resultStr += str[index];
    }
  }
  return resultStr;
};

export default swapIndices;
