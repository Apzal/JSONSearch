package Utilities;


import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.*;

public  class Operations {

    public static Response response;
    public static String response_content;
    public static String baseUrl = null;
    public static String responseFileName = null;
    public static String base_dir = System.getProperty("user.dir");
    public  LinkedHashSet<String> foundlist;
    public int counter=0;
    public List<String> result;

    public LinkedHashSet<String> getFoundlist() {
        return foundlist;
    }

    public List<String> getResult() {
        return result;
    }

    public static void setContent(String responseContent) {
        response_content = responseContent;
    }

    public static String  getContent() {
        return response_content;
    }



      //make a rest request
    public void makeRequest(String baseUrl) throws URISyntaxException {

        RequestSpecBuilder builder = new RequestSpecBuilder();
        builder.setBaseUri(baseUrl);
        builder.setContentType(ContentType.JSON);
        RequestSpecification requestSpec = builder.build();
        RequestSpecification request = RestAssured.given().spec(requestSpec);
        response = request.get(new URI(baseUrl));
        String response_content = response.getBody().asString();
        Operations.setContent(response_content);

    }

     //save the response as a json file
    public void saveResponse(String fileName) throws IOException {
        File responsefile = new File(base_dir + "//src//test//java//response");
        if (!responsefile.exists()) {
            responsefile.mkdir();
        }

        BufferedWriter writer = new BufferedWriter(new FileWriter(base_dir + "//src//test//java//response//" + fileName));
        writer.write(Operations.getContent());
        writer.close();
    }

    public String getProjectConfig(String property) {
        Properties projectConfig = new Properties();
        try {
            projectConfig.load(new FileInputStream(base_dir + "//src//configuration.properties"));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return projectConfig.getProperty(property).toString();
    }

    public FileReader readFile() throws FileNotFoundException {
        FileReader reader = new FileReader(base_dir + "//src//test//java//response//" + responseFileName);
        return reader;
    }

    //compare the actual and expected data using collection comparison
    public boolean islistmatching(List<String> expected,List<String> actual){
        if (expected == null && actual == null){
            return true;
        }

        if((expected == null && actual != null) || expected != null && actual == null || expected.size() != actual.size()){
            return false;
        }

        expected = new ArrayList<String>(expected);
        actual = new ArrayList<String>(actual);

        Collections.sort(expected);
        Collections.sort(actual);

        return expected.equals(actual);
    }

    //return the true/false based on the search comparison
    public boolean matchResult(String expected,String count){
        List<String> expected_Result=new ArrayList<String>();
        String s1[];
        if(expected.contains(",")){
            s1 =expected.split(",");
            for(int i=0;i<s1.length;i++){
                expected_Result.add(s1[i]);
            }
        }
        else if(expected.length()!=0){
            expected_Result.add(expected);
        }

        Boolean match=islistmatching(expected_Result,getResult());

        return match;

    }

    public void searchJson(String header,String searchTerm,String searchHeader) throws IOException, ParseException {
        foundlist = new LinkedHashSet<String>();

        JSONParser parser = new JSONParser();
        //read the json file
        JSONObject jsonObject = (JSONObject) parser.parse(readFile());

        //get the json object from json file and store in an array
        JSONArray jsonArray = (JSONArray) jsonObject.get(header);

        //iterate over the array
        for (int i = 0; i < jsonArray.size(); i++) {
            JSONObject jsonObject1 = (JSONObject) jsonArray.get(i);
            //get all the keys from the json file
            Set <String> keySet=jsonObject1.keySet();

            //iterate ove the key set to get the search data
            Iterator iterator=keySet.iterator();
            do{
                String key=iterator.next().toString();
                //search the data depends on the type of the stored instance
                if(jsonObject1.get(key) instanceof JSONArray){
                    JSONArray jsonArray1 = (JSONArray) jsonObject1.get(key);
                    for (int j = 0; j < jsonArray1.size() ; j++) {
                        String expectedValue= (String) jsonArray1.get(j);
                        if(expectedValue.toLowerCase().contains(searchTerm.toLowerCase())){
                            counter+=1;
                            foundlist.add((String) jsonObject1.get(searchHeader));

                        }
                    }
                }

                if(jsonObject1.get(key) instanceof Long){
                    Long expectedValue= (Long) jsonObject1.get(key);
                    try{
                        Long actualvalue=Long.parseLong(searchTerm);
                        if(expectedValue.equals(actualvalue)){
                            counter+=1;
                            foundlist.add((String) jsonObject1.get(searchHeader));
                        }
                    }
                    catch (Exception e){
                        //continue with next line of code
                    }

                }

                if(jsonObject1.get(key) instanceof String){
                    String expectedValue= (String) jsonObject1.get(key);
                    if(expectedValue.toLowerCase().contains(searchTerm.toLowerCase())){
                        counter+=1;
                        foundlist.add((String) jsonObject1.get(searchHeader));
                    }

                }


            }
            while (iterator.hasNext());

        }
        // store the final search result to a List
        result=new ArrayList<String>(foundlist);


    }


}


