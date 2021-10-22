import java.rmi.server.RemoteStub;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.StringJoiner;
import java.util.TreeMap;

import javax.swing.text.html.parser.Entity;

public class Main {

    class Animal{
        String name;
        int age;

        public Animal(String name, int age) {
            this.name = name;
            this.age = age;
        }

        @Override
        public String toString() {
            StringBuilder builder = new StringBuilder();
            builder.append("Animal [name=");
            builder.append(name);
            builder.append(", age=");
            builder.append(age);
            builder.append("]");
            return builder.toString();                    
        }

        //Override the equals method to do a field to field comparison

        // @Override
        // public boolean equals(Object obj) {
        //     if (this == obj) return true;
        //     if (obj == null || getClass() != obj.getClass()) return false;

        //     Animal animal = (Animal) obj;

        //     if(age != animal.age) return false;
        //     return name != null ? name.equals(animal.name) : animal.name == null;
        // }


    }
    
    public static void main(String[] args) {
        
        // section1();
        // section2();
        section3();


    }


    public static void section1() {

        HashSet<Integer> hsList = new HashSet<>();
        hsList.add(12);
        hsList.add(44);
        hsList.add(15);
        hsList.add(67);
        hsList.add(43);
        hsList.add(12);
        hsList.add(15);
        // unordered list
        System.out.println(hsList);

        ArrayList<Integer> arrList = new ArrayList<>();
        arrList.add(12);
        arrList.add(44);
        arrList.add(15);
        arrList.add(67);
        arrList.add(43);
        arrList.add(12);
        arrList.add(15);
        // ordered list with duolicates
        System.out.println(arrList);

        LinkedHashSet<Integer> lhsList = new LinkedHashSet<>();
        lhsList.add(12);
        lhsList.add(44);
        lhsList.add(15);
        lhsList.add(67);
        lhsList.add(43);
        lhsList.add(12);
        lhsList.add(15);
        // ordered list w/o duolicates
        System.out.println(lhsList);

    }


    public static void section2() {

        HashSet<Animal> animals = new HashSet<>();

        // animals.add(new Animal("Dog", 12));
        // animals.add(new Animal("Cat", 8));
        // animals.add(new Animal("Bird", 2));
        // animals.add(new Animal("Dog", 12));
        // animals.add(new Animal("Kangaroo", 24));

        System.out.println("-----HashSte-----");
        for(Animal animal: animals) {
            System.out.println(animal);
        }

    }


    public static void section3() {

        HashMap<String, String> dictionary = new HashMap<>();

        dictionary.put("word1", "definition1");
        dictionary.put("word2", "definition2");
        dictionary.put("word3", "definition3");
        dictionary.put("word4", "definition4");

        for(String word: dictionary.keySet()) {
            System.out.println(word); // no inherent order
            System.out.println(dictionary.get(word));
        }

        System.out.println("==================================");

        for(Map.Entry<String, String> entry: dictionary.entrySet()) {
            System.out.println(entry.getKey());
            System.out.println(entry.getValue());
        }

        System.out.println("=============TreeMap=============");


        TreeMap<String, String> dictionary2 = new TreeMap<>();
        dictionary2.put("testing", "definition1");
        dictionary2.put("eating", "definition2");
        dictionary2.put("woworkingrd3", "definition3");
        dictionary2.put("playing", "definition4");

        dictionary2.put("eating", "xxxxx");


        for(Map.Entry<String, String> entry: dictionary2.entrySet()) {
            System.out.println(entry.getKey() + " = " + entry.getValue());
            System.out.println();
        }

    }

}
