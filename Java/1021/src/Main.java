import java.util.ArrayList;

public class Main {
    
    public static void main(String[] args) {
        ArrayList<String> myList = new ArrayList<String>();
        myList.add("hello");
        
        // String myVal = myList.get(0); // index 0 contains an object data type
        String myVal = (String) myList.get(0);

        ////////////////////////

        Container<Integer, Integer> container = new Container<>(12, 34);

        // int val1 = container.getItem1();
        // int val2 = container.getItem2();



    }

}
