package compareTo;
import java.util.List;
import java.util.Collections;
import java.util.LinkedList;


class Names implements Comparable<Names> {

    private String name;

    public Names(String name) {
        this.name = name;
    }

    @Override
    public int compareTo(Names o) {
        if(name.length() == o.name.length()) {
            return 0;
        } else if(name.length() < o.name.length()) {
            return 1;
        } else {
            return -1;
        }
    }

    @Override
    public String toString() {
        return name;
    }
}


public class main {
    public static void main(String[] args) {

        List<Names> countries = new LinkedList<>();
        countries.add(new Names("Canada"));
        countries.add(new Names("USA"));
        countries.add(new Names("Egypt"));
        countries.add(new Names("Thailand"));
        countries.add(new Names("Poland"));

        System.out.println(countries);

        // -------
        
        // List<String> countries = new LinkedList<>();
        // countries.add("Canada");
        // countries.add("USA");
        // countries.add("Egypt");
        // countries.add("Thailand");
        // countries.add("Poland");

        // System.out.println(countries);

        // countries.sort(null);
        // System.out.println(countries);
        Collections.sort(countries);
        System.out.println(countries);
        Collections.reverse(countries);
        System.out.println(countries);


    }

    public static void printList(List<String> list) {
        
    }
    
}
