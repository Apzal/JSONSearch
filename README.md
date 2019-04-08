# JsonSearch
The purpose of this search is to return the title of a movie when a word or phrase is passed. The provided search term should be searched in all values of the object, returning the title(s) wherever the searched term is present.At the end it should also show how many times the term was present.


JAVA is used as programming language.Cucumber and REST API are used.

# About this work

1.This project uses a REST request to a fake server https://my-json-server.typicode.com/Apzal/JsonServer/db where the JSON file resides

2.The REST response is saved to response.json file.

3.The scenarios are written using cucumber gherkin scripts and placed under Features folder.

4.The response.json file is then searched using the search terms from the scenarios.The title and the number of occurence of the search term is compared with the expected result.

# How to use:

Method 1:

1.Clone this project to your local folder.

2.Open Command Prompt and navigate to the folder contains pom.xml and type the command 'mvn clean test'

3.Once execution completed navigate to "\JsonSearch\target\cucumber-html-report.html\index.html" to view the test result report

Method 2:

1.Clone this project to your local folder

2.Open the project as a maven project from your favorite IDE and execute the java file "\JsonSearch\src\test\java\TestRunner.java".

3.Once execution completed navigate to "\JsonSearch\target\cucumber-html-report.html\index.html" to view the test result report
