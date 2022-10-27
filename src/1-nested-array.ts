// function getMaximums(inputArrs: number[][]): number[] {
    
//     return 
// }

// helper function
function getMaximum(inputArr: number[]): number{
    let maxSoFar = inputArr[0]
    for (const num of inputArr){
        if (num > maxSoFar){
            maxSoFar = num
        }
    }
    return maxSoFar
}

// console.log(getMaximums([[1,2], [2,3]]), [2,3])

export default getMaximum;