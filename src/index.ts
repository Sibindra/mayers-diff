import calcArrDiff from "./calcArrDiff";

// fast-myers-diff@2.0.0 and earlier used Uint8Array to save indices, so it can only correctly handle inputs with added length less than 256.

const arr1 = ["AB" , "CD" , "DEER" , "DEAR"];
const arr2 = ["AB" , "DD" , "DEAR" , "AB" , "JHON"];

function main() {
  console.time("time:");
  //   console.log(calcDiff("AB", "CB"));
  console.log(
    calcArrDiff({
      arr1,
      arr2,
    })
  );
  console.timeEnd("time:");
}

main();
