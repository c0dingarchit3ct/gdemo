package gdemo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductsController {
    @CrossOrigin()
    @RequestMapping("/products")
    public List<String> getlist(@RequestParam(value="name", defaultValue="") String name) {
       // Product p = new Product("sku",name);
        List<String> ps =MemCache.getProducts(name);
        return  ps;
    }
}
