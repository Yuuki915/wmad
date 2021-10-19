package CallByValue;

public class CallByReference {
 
    public static void main(String[] args) {
        
        String[] names = {"Charlie", "John", "Patrick", "Mike", "Sam"};
        CallByReference cbr = new CallByReference();
        cbr.displayNames(names);
        System.out.println(names[0]);

    }


    void displayNames(String[] nameList) {
        nameList[0] = "Sally";

        for(String name:nameList) {
            System.out.println(name);
        }
        System.out.println("-------");
    }

}
