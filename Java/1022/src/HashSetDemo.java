import java.util.HashSet;

public class HashSetDemo {
    
    public static void main(String[] args) {
        
        HashSet<String> hSet = new HashSet<>();
        
        hSet.add("Java");
        hSet.add("Python");
        hSet.add("Ruby");
        hSet.add("C++");
        System.out.println("hSet contains: " + hSet);

        hSet.add("Java");
        hSet.add("Ruby");
        System.out.println("After adding duplicated, hSet contains: " + hSet);

        hSet.add(null);
        System.out.println("hSet contains: " + hSet);

        hSet.add(null);
        System.out.println("hSet contains: " + hSet);

    }

}
