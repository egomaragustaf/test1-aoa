export function isPalindrome(text: string) {
    text = text.toLocaleLowerCase()
    let result = ""
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }
    return text === result ? true : false
}

// console.log(isPalindrome("kasur rusak"))