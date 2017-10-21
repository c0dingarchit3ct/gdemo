package gdemo;

public class Product {

    private final String sku;
    private final String name;

    public Product(String sku, String name) {
        this.sku = sku;
        this.name = name;
    }

    public String getSKU() {
        return sku;
    }

    public String getName() {
        return name;
    }
}
