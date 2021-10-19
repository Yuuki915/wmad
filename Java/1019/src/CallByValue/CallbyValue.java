package CallByValue;

public class CallbyValue {
    
    public static void main(String[] args) {
        int value = 10;
        CallbyValue cbv = new CallbyValue();
        System.out.println("Current value in main: " + value);
        cbv.displayValue(value);
        System.out.println("Current value in main: " + value);
    
    }

    void displayValue(int value) {
        System.out.println("Current value in displayValue: " + value);
        value = 20;
        System.out.println("Current value in displayValue: " + value);

    }


}
