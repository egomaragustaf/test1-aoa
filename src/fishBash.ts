export function fishBash(number: number) {
    let result = ''
    for (let i = 1; i <= number; i++){
        if (i % 15 == 0) {
            result += 'fish bash'
        } else if (i % 5 == 0) {
            result += 'bash'
        } else if (i % 3 == 0) {
            result += 'fish'
        } else {
            result += i.toString()
        }
    }
    return result
}

// console.log(fishBash(10))