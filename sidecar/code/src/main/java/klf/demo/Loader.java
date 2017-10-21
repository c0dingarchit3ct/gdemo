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

    private static Jedis jedis = new Jedis("redis");

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
            System.out.println ("System Exception ");
            e.printStackTrace();
        }
        LoadData(products);
    }

    public static long  LoadData(JSONArray data) {
        System.out.println("Connecting to redis");
        System.out.println("server is running -> " + jedis.ping());
        int size = data.size();


        long startTime = System.currentTimeMillis();
        JSONObject p = null;
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
        }
        long estimatedTime = System.currentTimeMillis() - startTime;
        System.out.println (" Wrote " + size + " records in " + estimatedTime + " Milli Seconds");

        return estimatedTime;

    }
}
