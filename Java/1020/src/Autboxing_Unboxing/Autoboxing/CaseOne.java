package Autboxing_Unboxing.Autoboxing;

public class CaseOne {
    public static void myMethod(Integer num) {
        // compiler automatically convers it to 
        System.out.println(num);
    }

    public static void main(String[] args) {
        myMethod(5); // passed int (primitive type)
    }
}
