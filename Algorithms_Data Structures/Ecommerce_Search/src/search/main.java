package search;

public class main {
    public static void main(String[] args) {
        product[] products = {
            new product("P001", "Laptop", "Electronics"),
            new product("P002", "Shoes", "Fashion"),
            new product("P003", "Camera", "Electronics"),
            new product("P004", "Watch", "Accessories"),
            new product("P005", "Phone", "Electronics")
        };

        String target = "Camera";

        System.out.println("🔍 Linear Search:");
        int indexLinear = search_inventory.linearSearch(products, target);
        if (indexLinear != -1)
            System.out.println("Found at index:\n " + indexLinear + " → " + products[indexLinear]);
        else
            System.out.println("Product not found");

        System.out.println("\n🔍 Binary Search:");
        int indexBinary = search_inventory.binarySearch(products, target);
        if (indexBinary != -1)
            System.out.println("Found at index: \n" + indexBinary + " → " + products[indexBinary]);
        else
            System.out.println("\n Product not found");
    }
}
