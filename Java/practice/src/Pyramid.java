import java.util.Scanner;

// quiz

public class Pyramid {
    public static void main(String[] args) {

    // Q 10
        int inData;
        Scanner scan = new Scanner(System.in);

        System.out.println("Enter the data");
        inData = scan.nextInt();

        System.out.println(inData);


        for(int i = inData; i >= 1; i--) {
            for(int j =1; j <= i; j++) {
                System.out.print("@");
            }
            System.out.println();
        }

        scan.close();

    }
}