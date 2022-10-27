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

export default getMaximum;