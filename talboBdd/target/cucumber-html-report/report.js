$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/kohli/OneDrive/Documents/NetBeansProjects/jan27/talboBdd/src/main/java/features/talbot.feature.feature");
formatter.feature({
  "line": 1,
  "name": "Talbot Search Test Feature",
  "description": "",
  "id": "talbot-search-test-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Talbot Search Scenario",
  "description": "",
  "id": "talbot-search-test-feature;talbot-search-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of Home Page is Talbot",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on searchbox and enters \"\u003csearch\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on submit",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on choice",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user sees item details",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "talbot-search-test-feature;talbot-search-scenario;",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 12,
      "id": "talbot-search-test-feature;talbot-search-scenario;;1"
    },
    {
      "cells": [
        "pajama"
      ],
      "line": 13,
      "id": "talbot-search-test-feature;talbot-search-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Talbot Search Scenario",
  "description": "",
  "id": "talbot-search-test-feature;talbot-search-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of Home Page is Talbot",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on searchbox and enters \"pajama\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on submit",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on choice",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user sees item details",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 4743365000,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.title_of_Home_Page_is_Talbot()"
});
formatter.result({
  "duration": 40470200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pajama",
      "offset": 37
    }
  ],
  "location": "TestSteps.user_clicks_on_searchbox_and_enters(String)"
});
formatter.result({
  "duration": 274434300,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_submit()"
});
formatter.result({
  "duration": 2230984300,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_choice()"
});
formatter.result({
  "duration": 7391879500,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_sees_item_details()"
});
formatter.result({
  "duration": 19905100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Talbot Location Scenario",
  "description": "",
  "id": "talbot-search-test-feature;talbot-location-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on Talbot",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user clicks on Store Locator",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user selects distance",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user enters \"\u003czipcode\u003e\" and clicks find stores",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user clicks on first choice",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user can see location detail",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "talbot-search-test-feature;talbot-location-scenario;",
  "rows": [
    {
      "cells": [
        "zipcode"
      ],
      "line": 25,
      "id": "talbot-search-test-feature;talbot-location-scenario;;1"
    },
    {
      "cells": [
        "60188"
      ],
      "line": 26,
      "id": "talbot-search-test-feature;talbot-location-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Talbot Location Scenario",
  "description": "",
  "id": "talbot-search-test-feature;talbot-location-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on Talbot",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user clicks on Store Locator",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user selects distance",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user enters \"60188\" and clicks find stores",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user clicks on first choice",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user can see location detail",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.user_is_on_Talbot()"
});
formatter.result({
  "duration": 1259297800,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_Store_Locator()"
});
formatter.result({
  "duration": 313051900,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_selects_distance()"
});
formatter.result({
  "duration": 2835664100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60188",
      "offset": 13
    }
  ],
  "location": "TestSteps.user_enters_and_clicks_find_stores(String)"
});
formatter.result({
  "duration": 434891200,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_first_choice()"
});
formatter.result({
  "duration": 2281786100,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_can_see_location_detail()"
});
formatter.result({
  "duration": 10988100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Talbot GiftCard Scenario",
  "description": "",
  "id": "talbot-search-test-feature;talbot-giftcard-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@TC3"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "user is on Talbot page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "user scrolls down and clicks giftcard link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user clicks hundred dollar amount",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user clicks personalize and types in \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user clicks add to bag",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user can see shopping bag",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "talbot-search-test-feature;talbot-giftcard-scenario;",
  "rows": [
    {
      "cells": [
        "message"
      ],
      "line": 39,
      "id": "talbot-search-test-feature;talbot-giftcard-scenario;;1"
    },
    {
      "cells": [
        "To jane with love"
      ],
      "line": 40,
      "id": "talbot-search-test-feature;talbot-giftcard-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "Talbot GiftCard Scenario",
  "description": "",
  "id": "talbot-search-test-feature;talbot-giftcard-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@TC3"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "user is on Talbot page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "user scrolls down and clicks giftcard link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user clicks hundred dollar amount",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user clicks personalize and types in \"To jane with love\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user clicks add to bag",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user can see shopping bag",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.user_is_on_Talbot_page()"
});
formatter.result({
  "duration": 1138201700,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_scrolls_down_and_clicks_giftcard_link()"
});
formatter.result({
  "duration": 2515885200,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_hundred_dollar_amount()"
});
formatter.result({
  "duration": 225836400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "To jane with love",
      "offset": 38
    }
  ],
  "location": "TestSteps.user_clicks_personalize_and_types_in(String)"
});
formatter.result({
  "duration": 933044400,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_add_to_bag()"
});
formatter.result({
  "duration": 20183239600,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_can_see_shopping_bag()"
});
formatter.result({
  "duration": 1016494600,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_closes_browser()"
});
formatter.result({
  "duration": 808795500,
  "status": "passed"
});
});