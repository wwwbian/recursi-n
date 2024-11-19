function sumArray(arr) {
    if (arr.length===0) {
        return 0
    } else{
        return arr[0] + sumArray(arr.slice(1));

    }
}
console.log(sumArray([2,4,6]))