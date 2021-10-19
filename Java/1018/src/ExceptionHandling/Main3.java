package ExceptionHandling;

import java.io.FileNotFoundException;

public class Main3 {
    public static void main(String[] args) {
        try {
            SomeMethod();
        } catch (FileNotFoundException e) {
            System.out.println("catch block of main method (filenotfound)");
        } catch (Exception e) {
            System.out.println("catch block of main method (exception)");
        }
    }


    public static void SomeMethod() throws Exception {
        System.out.println("Message from someMethod");
        System.out.println(10/5);
        throw new Exception();
    }
}
