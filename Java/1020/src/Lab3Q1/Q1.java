package Lab3Q1;

import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class Q1 {
    public static void main(String[] args) {

        ArrayList<Integer> arrayList = new ArrayList<>();

        int[] array = new int[50];
        for (int i = 1; i < 10; i++) {
            array[i] = 1 + (int) (Math.random() * 50);
            System.out.println(array[i]);
        }

    }
}
