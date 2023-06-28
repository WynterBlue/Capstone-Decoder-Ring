// Write your tests here!
const {caesar} = require("../src/caesar.js")
const expect = require("chai").expect

describe("caesar", () => {
    it("returns false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
        const expected = false
        const actual = caesar("testing", -30)
        expect(actual).to.equal(expected)
    })
    it("ignores capital letters.", () => {
        const expected = "qbpqfkd"
        const actual = caesar("TesTing", -3)
        expect(actual).to.equal(expected)
    })
    it("handles shifts that go past the end of the alphabet.", () => {
        const expected = "xli fvsar jsb nyqtih sziv xli pedc hsk!!!"
        const actual = caesar("the brown fox jumped over the lazy dog!!!", -22)
        expect(actual).to.equal(expected)
    })
    it("can decode", () => {
        const expected = "the brown fox jumped over the lazy dog!!!"
        const actual = caesar("Znk hxuct lud pasvkj ubkx znk rgfe jum!!!", -20, false)
        expect(actual).to.equal(expected)
    })
    it("maintains spaces and other nonalphabetic symbols in the message", () => {
        const expected = "?12@wtaad ldgas!!"
        const actual = caesar("?12@hello world!!", 15)
        expect(actual).to.equal(expected)
    })
})