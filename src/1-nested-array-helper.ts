// helper function
function getMaximum(inputArr: (string|number)[]): number|string{ 
    // number or string as return type because if the array only has strings it will return the string at first position 
    let maxSoFar = inputArr[0]
    for (const num of inputArr){
        if (typeof num !== "string" && num > maxSoFar){
            maxSoFar = num
        }
    }
    return maxSoFar
}

export default getMaximum;