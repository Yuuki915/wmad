package Array;
import java.util.ArrayList;

public class Main2 {

    public static void main(String[] args) {
        
        // Type checking during compile-time
        String stringArr[] = new String[5];
        // stringArr[0] = new Integer(12);

        int[] array = new int[3];
        Main2[] array1 = new Main2[3];

        // not allowed to add primitive type
        // ArrayList<char> arrayList = new ArrayList<>();
        // ArrayList<int> arrayList1 = new ArrayList<>();

        // this is allowed in ArrayList
        ArrayList<Integer> arrayList1 = new ArrayList<>();
        // ArrayList<String> arrayList1 = new ArrayList<>();
        // ArrayList<Object> arrayList1 = new ArrayList<>();


    }
    
}
