const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl")
const checkElementExists = require("../support/check/checkElementExists")

Given(/^that User goes to Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "http://localhost:8080/")
});
When(/^page is loaded$/, async function () {
    // in order to make sure page is loaded, checking whether video list exists
    await checkElementExists.call(this, "#video-list-container", false)
});
Then(/^User can see some of videos' title like$/, async function (arr) {

    let titles = []

    // descriptions: includes title, ownerName, viewCount and publishDateInMonth
    // therefore needs to be splitted
    const descriptions = await this.page.$$eval('.video-container',
            videos => videos.map(videoContainer => videoContainer.querySelector('.description-container').innerText)
    )

    // splitting whole descriptions into parts to only collect titles
    descriptions.forEach(description => {
        titles.push(description.split("\n")[0])
    })

    // for every videoTitle given in the scenario
    // assert whether it is involved inside collected title array
    for (let [ videoTitle ] of arr.rawTable) {
        expect(arr.rawTable.find((el) => el.includes(videoTitle))).toBeDefined();
    }
});