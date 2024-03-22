// let array = [8, 5, 3, 9, 1, 7, 2, 4, 6, 10]

export function ascendingSort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temporary = array[i]
                array[i] = array[j]
                array[j] = temporary
            }
        }
    }
    return array
} 

export function descendingSort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                let temporary = array[i]
                array[i] = array[j]
                array[j] = temporary
            }
        }
    }
    return array
} 

// console.log(ascendingSort(array))
// console.log(descendingSort(array))