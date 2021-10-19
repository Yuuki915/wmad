package ExceptionHandling;

public class Main {

    public static void main(String[] args) {
        System.out.println(10 / 0);
        Main obj = new Main();
        obj.case2(10, 0);
    }

    public void case1(int x, int y) {
        if (y != 0) {
            System.out.println(x / y);
        } else {
            System.out.println("The value of y is 0");
        }
    }

    public void case2(int x, int y) {
        try {
            System.out.println(x / y);
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic Exception occurred");
        } catch (RuntimeException e) {
            System.out.println("The value of y is 0");
        }
    }

}
