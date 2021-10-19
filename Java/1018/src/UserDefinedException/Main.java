package UserDefinedException;

import java.io.FileNotFoundException;

public class Main {

    public static void main(String[] args) {
        try {
            someMethod();
        } catch (FileNotFoundException e) {
            System.out.println("catch block of main: filenotfound");
        } catch (UserDefinedException e) {
            // e.printStackTrace();
            System.out.println("Some error occurred ");
        } catch (Exception e) {
            System.out.println("catch block of main: exception");

        }
    }

    public static void someMethod() throws FileNotFoundException, Exception, UserDefinedException {
        int x = 3;

        switch (x) {
            case 1:
                throw new FileNotFoundException();
            case 2:
                throw new Exception();
            default:
                throw new UserDefinedException();
        }
    }
}

class UserDefinedException extends Exception {
    
}
