package Lab3Q1;

import java.util.ArrayList;
import java.util.Random;

public class Q2 {
    
    public static void main(String[] args) {
        
        // ArrayList<Integer> arrayList = new ArrayList<>();

        int[] arrayList = new int[50];
        for(int i=1; i<10; i++) {
            arrayList[i] = 1+(int)(Math.random() * 50);
            System.out.println(arrayList[i]);
        }


    }

}
