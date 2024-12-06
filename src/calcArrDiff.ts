import { diff } from "fast-myers-diff";

type TCalcArrDiff<T> = {
  arr1: T;
  arr2: T;
};

function calcArrDiff({ arr1, arr2 }: TCalcArrDiff<Array<string>>) {
  const result: string[] = [];

  for (let [sx, ex, sy, ey] of diff(arr1, arr2)) {
    if(ex - sx > 1){
        result.push(`Delete ${arr1.slice(sx, ex).join(",")} at index ${sx}`);
    }

    if(ey - sy > 1){
        result.push(`Insert ${arr2.slice(sy, ey).join(",")} at index ${sy}`);
    }

    sx++;
    sy++;
  }

  return result;
}

export default calcArrDiff;
