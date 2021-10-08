import java.util.Scanner;

// IntDivideTest
public class java06 {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        int dividend, divisor, quotient, remainder;

        System.out.println("Enter the divisor");
        dividend = scan.nextInt();

        System.out.println("Enter the divisor");
        divisor = scan.nextInt();

        quotient = dividend / divisor;
        remainder = dividend % divisor;

        System.out.println(dividend + "/" + divisor + " is " + quotient);
        System.out.println(dividend + "%" + divisor + " is " + remainder);

        scan.close();

    }
}
