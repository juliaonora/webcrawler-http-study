const {normalizeURL} = require("./crawl.js")
const {test, expect} = require("@jest/globals")

test("normalizeURL strip protocol", () => {
    const input = "https://blog.boot.dev/path"
    const actualInput = normalizeURL(input)
    const expectedInput = "blog.boot.dev/path"
    expect(actualInput).toEqual(expectedInput)
})

test("normalizeURL extra slash", () => {
    const input = "https://blog.boot.dev/path/"
    const actualInput = normalizeURL(input)
    const expectedInput = "blog.boot.dev/path"
    expect(actualInput).toEqual(expectedInput)
})

test("normalizeURL capitals", () => {
    const input = "https://BLOG.boot.dev/path/"
    const actualInput = normalizeURL(input)
    const expectedInput = "blog.boot.dev/path"
    expect(actualInput).toEqual(expectedInput)
})

test("normalizeURL strip http", () => {
    const input = "http://blog.boot.dev/path/"
    const actualInput = normalizeURL(input)
    const expectedInput = "blog.boot.dev/path"
    expect(actualInput).toEqual(expectedInput)
})