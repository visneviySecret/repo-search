export const getFirstChar = (element: number): number => {
    return Number(element.toString().slice(0, 1))
}

export const arrayFromLength = (length: number): number[] | undefined => {
    const elementsArr = []

    for (let i = 0; i <= length; i += 10) {
        if (elementsArr.length >= 10) return elementsArr
        elementsArr.push(getFirstChar(i) + 1)
    }
    return elementsArr
}
