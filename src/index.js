function findTypesofItemInArr(arr) {
  const dataObj = {
    stringCount: 0,
    numCount: 0,
    boolCount: 0,
    objCount: 0
  };
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      dataObj.stringCount++;
    } else if (typeof arr[i] === "boolean") {
      dataObj.boolCount++;
    } else if (typeof arr[i] === "number") {
      dataObj.numCount++;
    } else {
      dataObj.objCount++;
    }
  }
  console.log(dataObj);
  return dataObj;
}

findTypesofItemInArr([
  4,
  true,
  { name: "rohu" },
  "kol",
  7,
  9,
  "tyt",
  false,
  true,
  7,
  4
]);
