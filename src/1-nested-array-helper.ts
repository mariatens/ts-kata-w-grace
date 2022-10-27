// helper function
function getMaximum(inputArr: any[]): number{
    let maxSoFar = inputArr[0]
    for (const num of inputArr){
        if (typeof num !== "string" && num > maxSoFar){
            maxSoFar = num
        }
    }
    return maxSoFar
}

export default getMaximum;