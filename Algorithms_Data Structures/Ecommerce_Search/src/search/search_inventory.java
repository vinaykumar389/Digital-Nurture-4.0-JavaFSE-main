package search;

import java.util.Arrays;
import java.util.Comparator;

public class search_inventory {

    public static int linearSearch(product[] products, String targetName) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].getProductName().equalsIgnoreCase(targetName)) {
                return i;
            }
        }
        return -1;
    }

    public static int binarySearch(product[] products, String targetName) {
        Arrays.sort(products, Comparator.comparing(product::getProductName));

        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int compare = products[mid].getProductName().compareToIgnoreCase(targetName);

            if (compare == 0) return mid;
            else if (compare < 0) left = mid + 1;
            else right = mid - 1;
        }

        return -1;
    }
}
