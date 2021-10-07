package Formatting;

// Conversion type
public class java01 {
    public static void main(String[] args) {

    // for integers
    System.out.printf("%d%nm, 10");

    // for float and double
    System.out.printf("%f%n, 10.1");
    System.out.printf("%f%n, 10.12345678");

    // for character
    System.out.printf("%c%n", 'a');
    System.out.printf("%C%n", 'a');

    // for string
    System.out.printf("%s%n", "hello");
    System.out.printf("%S%n", "hello");

    // for boolean
    System.out.printf("%b%n", 5 < 4);
    System.out.printf("%B%n", 5 < 4);
    System.out.printf("%b%n", null);
    System.out.printf("%b%n", "cat"); // defaults to true

    // scientific notation
    System.out.printf("%e%n", 10.123);
    System.out.printf("%E%n", 10.123);

    // decimal or scientific format
    System.out.printf("%g%n", 10000.0);
    System.out.printf("%g%n", 1000000.0);


    // octal
    System.out.printf("%o%n", 10);

    // hexadecimal
    System.out.printf("%x%n", 10);
    System.out.printf("%X%n", 10);

    // hash code
    System.out.printf("%h%n", "hello");
    System.out.printf("%H%n", "hello");

    // hexadecimal floating point
    System.out.printf("%a%n", 10.12);
    System.out.printf("%A%n", 10.12);

    System.out.printf("%n");
    System.out.printf("\n");
    System.out.printf("%t");
    System.out.printf("%%");

    }
}

