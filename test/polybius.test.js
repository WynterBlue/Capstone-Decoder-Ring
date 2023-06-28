// Write your tests here!
const {polybius} = require("../src/polybius.js")
const expect = require("chai").expect

describe("polybius", () => {
    it("actually encodes", () => {
        const expected = "4432423352125413"
        const actual = polybius("thinkful")
        expect(actual).to.equal(expected)
    })
    it("actually decodes", () => {
        const expected = "th(i/j)nkful"
        const actual = polybius("4432423352125413", false)
        expect(actual).to.equal(expected)
    })
    it("when decoding, returns false if the number of characters in the string excluding spaces is not even", () => {
        const expected = false
        const actual = polybius("44324233521254134", false)
        expect(actual).to.equal(expected)
    })
    it("translates the letters i and j to 42", () => {
        const expected = "4242 4242"
        const actual = polybius("ij ji")
        expect(actual).to.equal(expected)
    })
    it("translates 42 to (i/j)", () => {
        const expected = "(i/j)(i/j)(i/j) (i/j) (i/j) (i/j)"
        const actual = polybius("424242 42 42 42", false)
        expect(actual).to.equal(expected)
    })
    it("ignores capital letters", () => {
        const expected = "42543444 52424141423322!"
        const actual = polybius("JuSt KIDding!")
        expect(actual).to.equal(expected)
    })
    it("maintains spaces in the message", () => {
        const expected = "3251131343 2543241341"
        const actual = polybius("Hello world")
        expect(actual).to.equal(expected)
    })
   
})