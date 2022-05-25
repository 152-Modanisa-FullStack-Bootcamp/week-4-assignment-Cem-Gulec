## TODO
* 1st scenario: watch page, watchview var mı?, container var mı?
* 2nd scenario: click event, query expect
* 3rd scenario: given ikinciyle aynı, hover test, pact'ten alacak şekilde refactor
* Pact direkt derslerdekiyle aynı
* Benzer prod

```gherkin
Feature: Video Site Project
  As Product Owner I want to surf on our video site project

  Scenario: User should see some videos on main page
    Given that User goes to Video Site Project's HomePage
    When page is loaded
    Then User can see some of videos' title like
      | Vue.js Course for Beginners [2021 Tutorial] |
      | Vue JS Crash Course                         |
      | ue 3 - What's New? What Changed?            |

  Scenario: User should navigate to watch page on click to video
    Given that User is on Video Site Project's HomePage
    When User clicks "Vue JS Crash Course" video
    Then User should see watch url correctly

  Scenario: User should see video image change on hover
    Given that User is on Video Site Project's HomePage
    When User hovers "Vue.js Explained in 100 Seconds" video
    Then User should see hovered image
```

# Installation and Instructions:
    
- There are two types of project (vue and acceptance) so **you need to install node_modules using yarn or npm on both projects.**
    
- We expect you to do ATDD cycle video site project. **You don't need to
implement everything in the video side project.** You are supposed to apply only necessary thing to implement 
above features. 

- **You are supposed to write cdc pact test for the cases you get data from the backend. 
Only getting videos endpoint.**
