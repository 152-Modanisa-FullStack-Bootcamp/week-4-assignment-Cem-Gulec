const {Given} = require("cucumber");

Given(/^Sanity$/, function () {
    expect(true).toBeTruthy()
});