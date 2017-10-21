package gdemo;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import redis.clients.jedis.Jedis;

import java.io.FileReader;
import java.io.FileWriter;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        JSONArray products = null;
        int size = 0;
        System.out.println(" Not loading data anymore, letting side car do it");
        SpringApplication.run(Application.class, args);
        /*
        try {
            System.out.println(" loading data");
            JSONParser parser = new JSONParser();

            long startTime = System.currentTimeMillis();
            products = (JSONArray) parser.parse(new FileReader("autocomplete.json"));
            long estimatedTime = System.currentTimeMillis() - startTime;
            size = products.size();
            System.out.println(" Read + " + size + " records in " + estimatedTime + " Milli Seconds");
        }

        catch (Exception e)  {
           System.out.println ("System Exception ");
           e.printStackTrace();
       }
       MemCache.LoadData(products);
       */
    }
}
