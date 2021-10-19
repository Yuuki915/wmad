package Array;
import java.util.ArrayList;

public class ArrayListMain {

    static ArrayList<String> listNames = new ArrayList<>();
    public static void main(String[] args) {
        
        // ArrayList arrayList = new ArrayList();
        // arrayList.add(12);
        // arrayList.add(new Integer(12));

        listNames.add("Charlie");
        listNames.add("John");
        listNames.add("Steve");
        listNames.add("Patrick");

        ArrayListMain app = new ArrayListMain();
        app.displayList(listNames);

        listNames.remove(1);
        app.displayList(listNames);

        listNames.remove("Patrick");
        app.displayList(listNames);

        System.out.println(listNames.get(1));

        System.out.println("=====Search=====");

        // search
        int position = app.search("terry");

        if(position != -1) {
            System.out.println(listNames.get(position));
        } else {
            System.out.println("Invalid Entry");
        }

        System.out.println("Before.....");
        app.displayList(listNames);
        System.out.println("===Modify===");
        app.modifyName(1, "Melissa");
        System.out.println("After.....");
        app.displayList(listNames);
    }

    void displayList(ArrayList<String> names) {
        for(String name: names){
            System.out.println(name);
        }
        System.out.println("----------");
    }


    int search(String name) {
        return listNames.indexOf(name);
    }

    void modifyName(int position, String newName) {
        listNames.set(position, newName);
    }


}
