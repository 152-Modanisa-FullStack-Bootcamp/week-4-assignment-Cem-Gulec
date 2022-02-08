const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl")
const checkElementExists = require("../support/check/checkElementExists")
const assert = require("assert")

Given(/^that User is on Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "http://localhost:8080/")
    await checkElementExists.call(this, "#video-list-container", false)
});
When(/^User hovers "([^"]*)" video$/, async function (videoName) {

    this.testCase = {
        "id": 3,
        "imgSelector": "#video-list-container > div:nth-child(3) > img",
        "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/3-cover.webp",
        "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/3-hover.webp",
        "title": "Vue.js Explained in 100 Seconds",
    }

    // firstly checking whether element we are looking for is the correct one
    // by comparing their title strings
    const videoDescriptions = await this.page.$$eval('.video-container',
        videos => videos.map(videoContainer => videoContainer.querySelector('.description-container').innerText)
    )

    // extracting only the title part of the description
    const videoTitle = videoDescriptions[this.testCase.id-1].split("\n")[0]
    assert.strictEqual(videoName, videoTitle)

    await this.page.hover(this.testCase.imgSelector)
});
Then(/^User should see hovered image$/, async function () {

    const videoSrc = await this.page.$$eval('.video-container > img',
        (options) =>
            options.map((option) => option.src)
        )

    assert.strictEqual(videoSrc[this.testCase.id-1], this.testCase.hoverImage)
});