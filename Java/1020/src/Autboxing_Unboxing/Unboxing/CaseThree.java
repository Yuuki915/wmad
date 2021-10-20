package Autboxing_Unboxing.Unboxing;
import java.util.ArrayList;


public class CaseThree {

    public static void main(String[] args) {
        
        ArrayList<Integer> arrayList = new ArrayList<>();
        arrayList.add(10);

        int num = arrayList.get(0);

        System.out.println(num);
    }
    
}
