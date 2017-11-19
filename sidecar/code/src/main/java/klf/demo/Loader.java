package klf.demo;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import redis.clients.jedis.Jedis;

import java.io.FileReader;

/**
 * Created by ahmed on 2017-08-11.
 */
public class Loader {

    private static Jedis jedis = new Jedis("localhost");

    public static void  main (String[] args) {
        JSONArray products = null;
        int size = 0;
        try {
            System.out.println(" loading data");
            JSONParser parser = new JSONParser();
           /*
           FileWriter fw = new FileWriter("test.json");
           fw.write("test");
           fw.close();*/
            long startTime = System.currentTimeMillis();
            products = (JSONArray) parser.parse(new FileReader("autocomplete.json"));
            long estimatedTime = System.currentTimeMillis() - startTime;
            size = products.size();
            System.out.println(" Read + " + size + " records in " + estimatedTime + " Milli Seconds");
        }
        catch (Exception e)  {
            System.out.println ("System Exception a");
            e.printStackTrace();
        }
          LoadData(products);

          while (true) {
            try {
            System.out.println("The data synchronization service");
            Thread.sleep(60000); }
            catch (Exception e) {
              System.out.println (" Interrupted exception : \n --------- \n"+e);
            }
          }
    }

    public static long  LoadData(JSONArray data) {
        int num_retries = 0; // trying and waiting for a few times until reids is up
        int MAX_RETRIES = 300;
        int RETRY_INTERVAL = 3000;  // wait for 3 seconds
        boolean connected = false;
        int size = 0;

        while (num_retries <= MAX_RETRIES && !connected) {
          num_retries++;
          try {
            System.out.println("Connecting to redis");
            System.out.println("server is running -> " + jedis.ping());
            connected = true;
          }
            catch (Exception e) {
              System.out.println ("Attempt no. "+ num_retries + "Failed ..");
              System.out.println ("Waiting for " + RETRY_INTERVAL + " Milliseconds");
              try {
              Thread.sleep(RETRY_INTERVAL);
            } catch (Exception e2) {
              System.out.println ("sleep interruption!");
            }
            }
        }
        if (!connected) {
          System.out.println ("  Failed to connect ");
          System.out.println ("Exiting!!!!");
          return 0;
        }

        long startTime = System.currentTimeMillis();
        JSONObject p = null;
        size = data.size();
        try {
            for(int n = 0; n < size; n++) {
                p = (JSONObject) data.get(n);
                if (p.get("name")!= null)
                    jedis.set(p.get("name").toString(),p.get("sku").toString());
                else
                    System.out.println (" BAD SKU " + p );
            } } catch (Exception e) {
            System.out.println ("Error in object");
            System.out.println(p);
            return 0;
        }
        long estimatedTime = System.currentTimeMillis() - startTime;
        System.out.println (" Wrote " + size + " records in " + estimatedTime + " Milli Seconds");

        return estimatedTime;

    }
}
