import { isPalindrome } from "../src/isPalindrome"
import { describe, test, expect } from "@jest/globals"

describe('Check Palindrome function', () =>{
    test('Returns correct value', () =>{
        expect(isPalindrome("kasur rusak")).toEqual(true)
    })
})