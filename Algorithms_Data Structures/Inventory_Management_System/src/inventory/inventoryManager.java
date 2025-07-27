package inventory;

import java.util.HashMap;

public class inventoryManager {
    private HashMap<String, Product> products;

    public inventoryManager() {
        products = new HashMap<>();
    }

    public void addProduct(Product product) {
        if (products.containsKey(product.getProductId())) {
            System.out.println("Product ID already exists.");
        } else {
            products.put(product.getProductId(), product);
            System.out.println("Product added.");
        }
    }

    public void updateProduct(String productId, Integer quantity, Double price) {
        if (products.containsKey(productId)) {
            Product product = products.get(productId);
            if (quantity != null) {
                product.setQuantity(quantity);
            }
            if (price != null) {
                product.setPrice(price);
            }
            System.out.println("Product updated.");
        } else {
            System.out.println("Product not found.");
        }
    }

    public void deleteProduct(String productId) {
        if (products.containsKey(productId)) {
            products.remove(productId);
            System.out.println("Product deleted.");
        } else {
            System.out.println("Product not found.");
        }
    }

    public void printInventory() {
        for (Product product : products.values()) {
            System.out.println(product);
        }
    }
}
