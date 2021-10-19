package Array;

public class Main {
    public static void main(String[] args) {

        int[] arr = {5, 6};
        display(arr);

        // int[] arr2 = new int[10];
        // arr2[5] = 10;
        // arr2[9] = 99;
        // System.out.println(arr2[1]);

        float[] floatArr = {0.0f,1.2f,3.4f};

        /*
        for(data_type variable: array) { 
            // body of the loop
        }
        */

        for(float i: floatArr){
            System.out.println(i);
        }

    }

    static void display(int a[]) {
        for(float i: a){
            System.out.println(i);
        }
    }


}
