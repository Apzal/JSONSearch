package step_definitions;

import Utilities.Operations;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.json.simple.parser.ParseException;
import org.junit.Assert;

import java.io.IOException;
import java.net.URISyntaxException;

public class SearchSteps extends Operations{
    @Given("I made a rest request and save the response")
    public void iMadeARestRequestAndSaveTheResponse() throws URISyntaxException, IOException {
        makeRequest(baseUrl);
        saveResponse(responseFileName);
    }


    @When("I search for a (.*) using search term (.*) for (.*)")
    public void iSearchForAMovieUsingSearchTermSearchTerm(String header,String searchTerm,String searchHeader) throws IOException, ParseException {
        searchJson(header,searchTerm,searchHeader);
    }

    @Then("I should get the title as (.*) and movie count as (.*)")
    public void IshouldgetResultandCount(String expected,String count) {
        Boolean match=matchResult(expected,count);
        String actualSearchCount=String.valueOf(counter);

        Assert.assertEquals("The expected result "+expected+" does not match with "+getResult(),match,true);

        Assert.assertEquals("The expected search count "+count+" does not match with actual search count"+actualSearchCount,count,actualSearchCount);
        }



    @Then("I should not get the title as (.*) and movie count as (.*)")
    public void IshouldnotgetResultandCount(String expected,String count) {
        Boolean match=matchResult(expected,count);
        String actualSearchCount=String.valueOf(counter);
        Assert.assertNotEquals("The expected result "+expected+" does not match with "+getResult(),match,true);

        Assert.assertNotEquals("The expected search count "+count+" does not match with actual search count"+actualSearchCount,count,actualSearchCount);
    }


    }




