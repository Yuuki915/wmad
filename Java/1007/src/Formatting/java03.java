package Formatting;

// Composition of printf
public class java03 {

    public static void main(String[] args) {

        double num1 = 10.1223;
        double num2 = 12.3456789;

        System.out.printf("%f%n, num1"); // defaults to 6 decimal places

        System.out.printf("%.0f%n", num2);
        System.out.printf("%.1f%n", num2);
        System.out.printf("%.2f%n", num2);
        System.out.printf("%.3f%n", num2);
        System.out.printf("%.4f%n", num2);
        System.out.printf("%.5f%n", num2);
        System.out.printf("%.6f%n", num2);
        System.out.printf("%.7f%n", num2);
        System.out.printf("%.8f%n", num2);

        String str = "hello";
        int num3 = 15;
        char let = 'A';

        System.out.printf("%.2s%n", str);
        System.out.printf("%.3b%n", true);
        System.out.printf("%.5h%n", str);
        // System.out.printf("%.3d%n", num3); // cannot specify precision on int
        // System.out.printf("%.2c%n", let); // cannot specify precision on char
        // System.out.printf("%.3n"); // error

    }
    
}