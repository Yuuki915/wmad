package Lab3Q1;

import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;


public class Q1 {
    public static void main(String[] args) {
        
        ArrayList<Integer> list = new ArrayList<>();

        Random rnd = new Random();
        for(int i=0; i<10; i++) {
            list.add(rnd.nextInt(50) + 1);
        }

        System.out.println(list);

        Scanner input = new Scanner(System.in);
        System.out.println("Put number: " + input.nextLine());

        // int val = ;

        // if(val == ) {
        //    System.out.println("Exist im the list"); 
        // } else {
        //     System.out.println("Not exsist in the list");
        // }


        

    }
}
