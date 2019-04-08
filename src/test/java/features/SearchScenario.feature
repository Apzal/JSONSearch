
 Feature: Search in Json file using rest api

   Background:
     Given I made a rest request and save the response

    @positivescenario
   Scenario Outline: Search the JSON file using search terms and get the title and count of search term occurrence
     When I search for a movie using search term <SearchTerm> for title
     Then I should get the title as <Titles> and movie count as <Count>

     Examples:
        |SearchTerm|Titles|Count|

        |Action  |Avengers: Age of Ultron,The Avengers|2|
        |Action  |The Avengers,Avengers: Age of Ultron|2|
        |Superhero  |The Avengers|1|
        |History  |Life of Adam|1|
        |Jeremy Renner|The Avengers|1|
        |Mark Ruffalo |Avengers: Age of Ultron,The Avengers|2|
        |Chris        |Avengers: Age of Ultron,The Avengers|4|
        |Adam         |Life of Adam                        |2|
        |2012         |The Avengers                        |1|
        |thriller||0|
        |2019      |      |0    |
        |Bob       |      |0    |


   #Negative Scenario to validate the search retrieves data which does not match with the expected result
   @negativescenario
   Scenario Outline: Search the JSON file using search terms and get the title and count of search term occurrence not matches with expected result
     When I search for a movie using search term <SearchTerm> for title
     Then I should not get the title as <Titles> and movie count as <Count>

     Examples:
       |SearchTerm|Titles|Count|

       |Action  |The Avengers|1|
       |Superhero  |Life of Adam|2|
       |History  |Avengers: Age of Ultron|0|
       |Jeremy Renner|Life of Adam|2|
       |Mark Ruffalo |Life of Adam|1|
       |Chris        |Avengers: Age of Ultron,The Avengers,Life of Adam |3|
       |Adam         |Life of Adam,The Avengers                         |1|
       |2012         |Avengers: Age of Ultron|2|
       |thriller|Evil Dead|1|
       |2019      |Captain Marvel|1|
       |Colin|Dumbo|1|