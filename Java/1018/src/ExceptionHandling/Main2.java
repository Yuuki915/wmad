package ExceptionHandling;

public class Main2 {

    public static void main(String[] args) {
        int x = 0;
        int y = 0;

        try {
            System.out.println(x / y);
        } catch (RuntimeException e) {
            System.out.println("Runtime exception");
        } catch (Exception e) {
            System.out.println("Exception");
        } finally {
            System.out.println("This will be printed");
        }
    }
}
