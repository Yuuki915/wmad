package Lab3Q1;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;



public class Q3 {

    
    public static void main(String[] args) {
        
        // String make;
        // String model;
        // int year;

        ArrayList<String> make = new ArrayList<>();
        make.add("Toyota");
        make.add("Honda");
        make.add("Nissan");

        ArrayList<String> model = new ArrayList<>();
        model.add("Type1");
        model.add("Type2");
        model.add("Type3");

        ArrayList<Integer> year = new ArrayList<>();

        year.add(1990);
        year.add(1994);
        year.add(1991);
        Collections.sort(year);
        System.out.println(year);

        



    }

}
