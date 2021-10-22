import java.util.HashMap;

public class HashMapDemo {
    
    public static void main(String[] args) {
        
        HashMap<Integer, String> hMap = new HashMap<>();

        hMap.put(1, "Java");
        hMap.put(2, "Python");
        hMap.put(3, "Ruby");
        hMap.put(4, "C++");
        System.out.println("hMap contains: " + hMap);

        hMap.put(5, "JavaScript");
        System.out.println("hMap contains: " + hMap);

        hMap.put(3, "Ruby");
        System.out.println("hMap contains: " + hMap);


    }

}
