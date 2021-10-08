public class MethodOverloading03 {
    
    public static void main(String[] args) {
        
        System.out.println("Area of rectangle: " + area(14.25d, 10.5d));
        System.out.println("Area of square: " + area(5.0d));
        System.out.println("Area of square: " area(5));

        // 1.differ in numbers of parameters
        // 2.differ in data type of parameters
        // 3.differ in order of parameters

        printSomething("hoge", 15);
        printSomething(15, "hoge");

    }

    public static double area(double length, double width) {
        return length * width;
    }

    public static double area(double side) {
        return side * side;
    }

    public static int area(int side) {
        return side * side;
    }


    public static void printSomething(String s, int num) {
        System.out.printf("%s %d%n", s, num);
    }

    public static void printSomething(int num, String s) {
        System.out.printf("%s %d%n", s, num);
    }
}
