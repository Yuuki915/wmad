public class MyUtils {

    public static void main(String[] args) {
        // body of the method
        System.out.println("hoge hoge hoge" + args);
    
        int x = addSum(12, 6);
        System.out.println(x);
    }

    private static int addSum(int x, int y) { // return type
        return x + y;
    }

}