
public class UnderstandingMethod01 {
    public static void main(String[] args) {

        // TODO Auto-generated method stub

        System.out.println("adfajhkldkas");

        printSomeJunk("test"); // parameterized method
        // String args = "test";

        int x = addSum(5, 5);
        System.out.println(x);
    }

    /*
    [access modifier][modifiers][returnType][methodName](Parameters) {
        // method body
    }
    */

    // access-modifiers - public, private, protected
    // modifiers - final, static, transient, synchronized, volatile

    public static void printSomeJunk(String args) {
        // body of the method
        System.out.println("hoge hoge hoge" + args);
    }

    public static int addSum(int x, int y) {
        return x + y;
    }

}
