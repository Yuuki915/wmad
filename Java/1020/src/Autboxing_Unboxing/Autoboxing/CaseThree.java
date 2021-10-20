package Autboxing_Unboxing.Autoboxing;

import java.util.ArrayList;


public class CaseThree {

    public static void main(String[] args) {
        
        ArrayList<Integer> arrayList = new ArrayList<>();

        // autoboxing: int to Integer
        arrayList.add(2);
        arrayList.add(5);

        System.out.println(arrayList);
    }
    
}
