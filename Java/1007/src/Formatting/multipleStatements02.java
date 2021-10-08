package Formatting;

// Multiple statements
public class multipleStatements02 {
    public static void main(String[] args) {
        
        int num1 = 10;
        int num2 = 30;

        System.out.printf("%d%d%d%n", num1, 20, num2);
        System.out.printf("%d %d %d%n", num1, 20, num2);

        // System.out.println("%d %f %d%n", num1, 20.0, num2);

        int num3 = 11;
        char per = '%';
        String s = "of people are left handed";

        System.out.printf("Did you know, %d%% %s%n", num3, per, s);
        System.out.printf("Did you know, %d%% %s%n", num3, s);


    }
}
