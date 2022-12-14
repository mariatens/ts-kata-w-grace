import getMaximum from "./1-nested-array-helper"

function getMaximums(inputArrs: (number|string)[][]): (number|string)[] {
    const maximums = []
    for (const inputArr of inputArrs){
        const maximum  = getMaximum(inputArr)
        maximums.push(maximum)
    }
    return maximums
}


export default getMaximums;