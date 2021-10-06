import java.util.*;

public class test {
    
    public static void main(String[] args) {
        String string = new String("Hello");
        System.out.println(string);

        String str, str2;

        Scanner scan = new Scanner(System.in);

        System.out.println("Enter something");
        str = scan.next();

        System.out.println(str);

        System.out.println("Enter something again...");
        str2 = scan.next();
        
        System.out.println(str2);

        scan.close();
    }
}
