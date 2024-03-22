import { fishBash } from "../src/fishBash"
import { describe, test, expect } from "@jest/globals"

describe('Fish Bash function', () =>{
    test('Returns correct value', () =>{
        expect(fishBash(15)).toEqual("12fish4bashfish78fishbash11fish1314fish bash")
        expect(fishBash(10)).toEqual("12fish4bashfish78fishbash")
    })
})