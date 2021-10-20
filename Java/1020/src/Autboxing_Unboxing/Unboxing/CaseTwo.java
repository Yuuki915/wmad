package Autboxing_Unboxing.Unboxing;

public class CaseTwo {
    
    public static void main(String[] args) {
        
        Integer intObject = new Integer(100);
        int num  = intObject; // unboxing object to primitive type

        System.out.println(num);

    }
}
