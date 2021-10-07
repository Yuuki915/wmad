package Formatting;

// Argument index
public class java05 {
    public static void main(String[] args) {
        
        System.out.printf("%s%s%s%n", "1", "2", "3");
        System.out.printf("%1$s%1$s%1$s%n", "1", "2", "3");
        System.out.printf("%3$s%2$s%1$s%n", "a", "b", "c");
        System.out.printf("%2$s %s %s %n", "a", "b", "c");
        System.out.printf("%s %3$s %s %n", "a", "b", "c");
        System.out.printf("%2$s %3$s %s %n", "a", "b", "c");
        System.out.printf("%1$s %1$s %n", "a");

        System.out.printf("%s %<s %<s %n", "a", "b", "c");
        System.out.printf("%s %<s %s %n", "a", "b", "c");
        // System.out.printf("%<s %s %s %n", "a", "b", "c"); // error
        System.out.printf("%2$s %s %<s %n", "a", "b", "c");
        // System.out.printf("%$2s %s %<s %n", "a", "b", "c"); // error

    }
}
