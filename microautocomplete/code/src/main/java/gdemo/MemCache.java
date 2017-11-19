package gdemo;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.ScanParams;
import redis.clients.jedis.ScanResult;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by akhalifa on 2017-08-01.
 */
public class MemCache {

    private static Jedis jedis = new Jedis("redis");

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

    public static List<String> getProducts(String key) {
        System.out.println("Connecting to redis " +  jedis.toString());
        System.out.println("server is running -> " + jedis.ping());
        long startTime = System.currentTimeMillis();

        key = key + "*";
        ScanParams scanParams = new ScanParams().count(100);
        scanParams.match(key);
        List<String> ret = new ArrayList<String>();

        String cursor = ScanParams.SCAN_POINTER_START;
        boolean cycleIsFinished = false;
        while (!cycleIsFinished) {
            ScanResult<String> res = jedis.scan(cursor,scanParams);
            List<String> names = res.getResult();
            ret.addAll(names);
            cursor = res.getStringCursor();
            if (cursor.equals("0")) {
                cycleIsFinished = true;
            }
        }

        long estimatedTime = System.currentTimeMillis() - startTime;
        System.out.println (" Found " + ret.size() + " records in " + estimatedTime + " Milli Seconds");
        return ret;
    }
}
