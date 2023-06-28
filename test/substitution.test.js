// Write your tests here!
const {substitution} = require("../src/substitution.js")
const expect = require("chai").expect

describe("substitution", () => {
    it("actually encodes", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "jrufscpw"
        expect(actual).to.equal(expected)
    })
    it("actually decodes", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
        const expected = "message"
        expect(actual).to.equal(expected)
    })
    it("maintains spaces and other nonalphabetic symbols in the message", () => {
        const actual = substitution("You are an excellent spy", "%@yqmcgrukswaf!nthdjpzibev")
        const expected = 'e!p %hm %f mbymwwmfj dne'
        expect(actual).to.equal(expected)
    })
    it("ignores capital letters", () => {
        const actual = substitution("THINKful", "xoyqmcgrukswaflnthdjpzibev")
        const expected =  "jrufscpw"
        expect(actual).to.equal(expected)
    })
    it("returns false if alphabet is not a string", () => {
        const actual = false
        const expected = substitution("hello", true)
        expect(actual).to.equal(expected)
    })
    it("returns false if alphabet is less than 26 characters", () => {
        const actual = false
        const expected = substitution("hello", "xoyqmcgrukswaflnthdj")
        expect(actual).to.equal(expected)
    })
    it("return false if all characters in alphabet aren't unique", () => {
        const actual = false
        const expected = substitution("hello", "xoyqmcgrukswaflnthdxx")
        expect(actual).to.equal(expected)
    })
})