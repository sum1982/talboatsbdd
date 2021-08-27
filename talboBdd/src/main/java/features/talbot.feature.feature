Feature: Talbot Search Test Feature
@TC1
Scenario Outline: Talbot Search Scenario
Given user is already on Home Page
When title of Home Page is Talbot
Then user clicks on searchbox and enters "<search>"
Then user clicks on submit
Then user clicks on choice
Then user sees item details

Examples:
    | search |
    | pajama |
    
@TC2
Scenario Outline: Talbot Location Scenario
Given user is on Talbot
When user clicks on Store Locator
Then user selects distance
Then user enters "<zipcode>" and clicks find stores
Then user clicks on first choice
Then user can see location detail

Examples:
    | zipcode |
    | 60188 |

@TC3
Scenario Outline: Talbot GiftCard Scenario
Given user is on Talbot page
When user scrolls down and clicks giftcard link
Then user clicks hundred dollar amount
Then user clicks personalize and types in "<message>"
Then user clicks add to bag
Then user can see shopping bag
Then user closes browser

Examples:
    | message |
    | To jane with love |


   
