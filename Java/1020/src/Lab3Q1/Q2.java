package Lab3Q1;
import java.util.ArrayList;
import java.util.Random;

public class Q2 {
    
    public static void main(String[] args) {
        
        ArrayList<Integer> list = new ArrayList<>();

        Random rnd = new Random();

        for(int i=0; i<10; i++) {
            list.add(rnd.nextInt(50));
        }
        
        
        ArrayList<Integer> list2 = list;
        list2.set(list.size() -1, -5);
        
        System.out.println(list);
        System.out.println(list2);
    }

}
