import javax.swing.plaf.synth.SynthOptionPaneUI;

// making decision

public class java02{

    public static void java01 (String[] args){
        int x = 4;

        if(x == 5){
            System.out.println("Value of x is 5");
        } else {
            System.out.println("Value of x is not 5");
        }

        int y = 6, z = 7;
        if(4 < 5){
            System.out.println("true");
        } else {
            System.out.println("false");
        }

        if(y >= z){
            System.out.println("true");
        } else {
            System.out.println("false");
        }


        boolean bool1 = true;
        boolean bool2 = false;

        if(bool1 && bool2) {
            System.out.println("Condition is TRUE");
        } else {
            System.out.println("Condition is FALSE");
        }

        boolean m = true;
        boolean n = false;

        if(m || n) {
            System.out.println("Condition is TRUE");
        } else {
            System.out.println("Condition is FALSE");
        }

        // if..else
        int b = 5;

        if(b == 5) {
            System.out.println("B equals to 5");
        } else if(b > 5) {
            System.out.println("B is greater than 5");
        } else if(b > 5) {
            System.out.println("B is smaller than 5");
        }

        // Ternary operator
        boolean a = true;

        a = (10 == 5) ? true : false;

        System.out.println(a);
    }
}
