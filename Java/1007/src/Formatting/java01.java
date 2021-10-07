package Formatting;

// Conversion type
public class java01 {
    public static void main(String[] args) {

    // for integers
    System.out.println("%d%nm, 10");

    // for float and double
    System.out.println("%f%n, 10.1");
    System.out.println("%f%n, 10.12345678");

    // for character
    System.out.println("%c%n", 'a');
    System.out.println("%C%n", 'a');

    // for string
    System.out.println("%s%n", "hello");
    System.out.println("%S%n", "hello");

    // for boolean
    System.out.println("%b%n", 5 < 4);
    System.out.println("%B%n", 5 < 4);
    System.out.println("%b%n", null);
    System.out.println("%b%n", "cat"); // defaults to true

    // scientific notation
    System.out.println("%e%n", 10.123);
    System.out.println("%E%n", 10.123);

    // decimal or scientific format
    System.out.println("%g%n", 10000.0);
    System.out.println("%g%n", 1000000.0);


    // octal
    System.out.println("%o%n", 10);

    // hexadecimal
    System.out.println("%x%n", 10);
    System.out.println("%X%n", 10);

    // hash code
    System.out.println("%h%n", "hello");
    System.out.println("%H%n", "hello");

    // hexadecimal floating point
    System.out.println("%a%n", 10.12);
    System.out.println("%A%n", 10.12);

    System.out.println("%n");
    System.out.println("\n");
    System.out.println("%t");
    System.out.println("%%");

    }
}

