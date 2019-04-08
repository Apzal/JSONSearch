$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/SearchScenario.feature");
formatter.feature({
  "name": "Search in Json file using rest api",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positivescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term \u003cSearchTerm\u003e for title",
  "keyword": "When "
});
formatter.step({
  "name": "I should get the title as \u003cTitles\u003e and movie count as \u003cCount\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SearchTerm",
        "Titles",
        "Count"
      ]
    },
    {
      "cells": [
        "Action",
        "Avengers: Age of Ultron,The Avengers",
        "2"
      ]
    },
    {
      "cells": [
        "Action",
        "The Avengers,Avengers: Age of Ultron",
        "2"
      ]
    },
    {
      "cells": [
        "Superhero",
        "The Avengers",
        "1"
      ]
    },
    {
      "cells": [
        "History",
        "Life of Adam",
        "1"
      ]
    },
    {
      "cells": [
        "Jeremy Renner",
        "The Avengers",
        "1"
      ]
    },
    {
      "cells": [
        "Mark Ruffalo",
        "Avengers: Age of Ultron,The Avengers",
        "2"
      ]
    },
    {
      "cells": [
        "Chris",
        "Avengers: Age of Ultron,The Avengers",
        "4"
      ]
    },
    {
      "cells": [
        "Adam",
        "Life of Adam",
        "2"
      ]
    },
    {
      "cells": [
        "2012",
        "The Avengers",
        "1"
      ]
    },
    {
      "cells": [
        "thriller",
        "",
        "0"
      ]
    },
    {
      "cells": [
        "2019",
        "",
        "0"
      ]
    },
    {
      "cells": [
        "Bob",
        "",
        "0"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positivescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term Action for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the title as Avengers: Age of Ultron,The Avengers and movie count as 2",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positivescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term Action for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the title as The Avengers,Avengers: Age of Ultron and movie count as 2",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positivescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term Superhero for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the title as The Avengers and movie count as 1",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positivescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term History for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the title as Life of Adam and movie count as 1",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positivescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term Jeremy Renner for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the title as The Avengers and movie count as 1",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positivescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term Mark Ruffalo for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the title as Avengers: Age of Ultron,The Avengers and movie count as 2",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positivescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term Chris for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the title as Avengers: Age of Ultron,The Avengers and movie count as 4",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positivescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term Adam for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the title as Life of Adam and movie count as 2",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positivescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term 2012 for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the title as The Avengers and movie count as 1",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positivescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term thriller for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the title as  and movie count as 0",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positivescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term 2019 for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the title as  and movie count as 0",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positivescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term Bob for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the title as  and movie count as 0",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence not matches with expected result",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term \u003cSearchTerm\u003e for title",
  "keyword": "When "
});
formatter.step({
  "name": "I should not get the title as \u003cTitles\u003e and movie count as \u003cCount\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SearchTerm",
        "Titles",
        "Count"
      ]
    },
    {
      "cells": [
        "Action",
        "The Avengers",
        "1"
      ]
    },
    {
      "cells": [
        "Superhero",
        "Life of Adam",
        "2"
      ]
    },
    {
      "cells": [
        "History",
        "Avengers: Age of Ultron",
        "0"
      ]
    },
    {
      "cells": [
        "Jeremy Renner",
        "Life of Adam",
        "2"
      ]
    },
    {
      "cells": [
        "Mark Ruffalo",
        "Life of Adam",
        "1"
      ]
    },
    {
      "cells": [
        "Chris",
        "Avengers: Age of Ultron,The Avengers,Life of Adam",
        "3"
      ]
    },
    {
      "cells": [
        "Adam",
        "Life of Adam,The Avengers",
        "1"
      ]
    },
    {
      "cells": [
        "2012",
        "Avengers: Age of Ultron",
        "2"
      ]
    },
    {
      "cells": [
        "thriller",
        "Evil Dead",
        "1"
      ]
    },
    {
      "cells": [
        "2019",
        "Captain Marvel",
        "1"
      ]
    },
    {
      "cells": [
        "Colin",
        "Dumbo",
        "1"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence not matches with expected result",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term Action for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not get the title as The Avengers and movie count as 1",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldnotgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence not matches with expected result",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term Superhero for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not get the title as Life of Adam and movie count as 2",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldnotgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence not matches with expected result",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term History for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not get the title as Avengers: Age of Ultron and movie count as 0",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldnotgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence not matches with expected result",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term Jeremy Renner for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not get the title as Life of Adam and movie count as 2",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldnotgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence not matches with expected result",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term Mark Ruffalo for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not get the title as Life of Adam and movie count as 1",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldnotgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence not matches with expected result",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term Chris for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not get the title as Avengers: Age of Ultron,The Avengers,Life of Adam and movie count as 3",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldnotgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence not matches with expected result",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term Adam for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not get the title as Life of Adam,The Avengers and movie count as 1",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldnotgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence not matches with expected result",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term 2012 for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not get the title as Avengers: Age of Ultron and movie count as 2",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldnotgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence not matches with expected result",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term thriller for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not get the title as Evil Dead and movie count as 1",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldnotgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence not matches with expected result",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term 2019 for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not get the title as Captain Marvel and movie count as 1",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldnotgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I made a rest request and save the response",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchSteps.iMadeARestRequestAndSaveTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the JSON file using search terms and get the title and count of search term occurrence not matches with expected result",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "name": "I search for a movie using search term Colin for title",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.iSearchForAMovieUsingSearchTermSearchTerm(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not get the title as Dumbo and movie count as 1",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.IshouldnotgetResultandCount(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});