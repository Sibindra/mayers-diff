import diff from "fast-diff";

function calcDiff(firstOperation: string, secondOperation: string) {
  const result = diff(firstOperation, secondOperation);
  const resultOperation: string[]= [];

  result.forEach((part) => {
    const operation = part[0]; // 1 = add, 0 = equal, -1 = delete
    const value = part[1]; // the value

    switch (operation) {
      case 1:
        resultOperation.push(`Insert: ${value}`);
        break;
      case 0:
        resultOperation.push(`Equal: ${value}`);
        break;
      case -1:
        resultOperation.push(`Delete: ${value}`);
        break;

      default:
        throw new Error("Invalid operation");
    }
  });

  return resultOperation;
}

export default calcDiff;
