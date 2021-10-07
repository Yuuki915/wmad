package Formatting;

// Width
public class java04 {
    public static void main(String[] args) {

        System.out.printf("%8d%n", 123);
        System.out.printf("%4d%5d%n", 123, 456);
        System.out.printf("%4d%n", 12345);

        String name = "Albert";
        int age = 18;
        double gpa = 3.5;

        System.out.printf("%-7s%7s%n", "Name =", name);
        System.out.printf("%-7s%7d%n", "Age =", age);
        System.out.printf("%-7s%7.2f%n", "GPA =", gpa);


    }
}
