package section2;

import java.util.ArrayList;
import java.util.List;

/*
 * Naming conventions are as follow:
 * 
 * T - Type (Integer, Float, Double, etc)
 * E - Element
 * K - Key
 * V - Value
 * N - Number
 * 
 */


 class Data<K, V> {
    private K key;
    private V value;

    public Data(K key, V value){
        this.key = key;
        this.value = value;
    }

    public K getKey() {
        return key;
    }
    public V getValue() {
        return value;
    }

    @Override
    public String toString() {
        return "Data [key=" + key + " , value= " + value + "]";
    }

    // Generic method
    public <E, N> void display(E element1, N element2) {
        System.out.println("Element1: " + element1);
        System.out.println("Element2: " + element2);
    }

    public <E> void printListData(List<E> list) {
        for(E element: list) {
            System.out.println(element);
        }
    }

 }


public class Main {
    public static void main(String[] args) {
        Data<Integer, String> data = new Data<>(1, "John");

        System.out.println(data);
        System.out.println("Key: " + data.getKey() + " || Value: " + data.getValue());
        data.display(1, true);


        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);

        data.printListData(list);


        List<String> list2 = new ArrayList<>();
        list2.add("John");
        list2.add("Adam");
        list2.add("Jane");
        list2.add("Sally");

        data.printListData(list2);


        
    }

}
