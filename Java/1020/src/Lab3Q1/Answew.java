package Lab3Q1;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

import javax.xml.crypto.dsig.keyinfo.RetrievalMethod;

import compareTo.main;

class Car {
    private String make;
    private String model;
    private int year;

    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    public void setMake(String make) {
        this.make = make;
    }

    public void setModel(String model) {
        this.model = model;
    }
    
    public void setYear(int year) {
        this.year = year;
    }

    public String getMake() {
        return make;
    }
    public String getModel() {
        return model;
    }
    public int getYear() {
        return year;
    }


    @Override
    public String toString() {
        return "Car [make=" + make + " , model=" + model + " , year=" + year + "]";
    }
    @Override
    public int compareTo(Car o) {
        // return 0;
        if(year == o.year) {
            return 0;
        } else if(year < o.year) {
            return 1;
        } else {
            return -1;
        }
    }


}

public class Answew {

    public static int getRandomNum(int min, int max) {
        Random random = new Random();
        return random.nextInt(max - min) + min; // (50-1)+1
    }

    public static void question1()  {
        Scanner input = new Scanner(System.in);
        ArrayList<Integer> randomNumList = new ArrayList<>();

        for(int i=0; i<10; i++) {
            randomNumList.add(getRandomNum(1, 50));
        }
// ----- Option1
        System.out.println("Generated Random Numbers are: " + randomNumList);
        
        // System.out.println("Please enter an integer: " );
        // Integer x = input.nextInt();

        // if(randomNumList.contains(x)) {
        //     System.out.println(x + " is in the list");
        // } else {
        //     System.out.println(x + " is not in the list");
        // }

        // input.close();


// ----- Option2
        while(true) {
            System.out.println("Please enter an integer between 1-50");
            Integer x = input.nextInt();

            if(randomNumList.contains(x)) {
                System.out.println(x + " is in the list");
                input.close();
                break;
            } else {
                System.out.println(x + " is not in the list");
            }
        }

    }


    public static void  question2() {
        ArrayList<Integer> randomNumList = new ArrayList<>();

        // get 10 random numbers between 1-50
        for(int i=0; i<10; i++) {
            randomNumList.add(getRandomNum(1, 50));
        }

        // ArrayList<Integer> randomCopyList = new ArrayList<>(randomNumList);
        ArrayList<Integer> randomCopyList = new ArrayList<>();
        randomCopyList.addAll(randomNumList);

        System.out.println("---Before set---");
        System.out.println(randomNumList);
        System.out.println(randomCopyList);

        randomNumList.set(randomNumList.size() - 1, -5);

        System.out.println("---After set---");
        System.out.println(randomNumList);
        System.out.println(randomCopyList);

    }


    public static void question3() {
        List<Car> cars = new ArrayList<>();

        cars.add(new Car("Jeep", "Wrangler", 1986));
        cars.add(new Car("Honda", "Civic", 1975));
        cars.add(new Car("Toyota", "Camry", 1982));

        for(Car car: cars) {
            System.out.println("Element : " + car);
        }

        System.out.println("**************************");

        // cars.sort(null);
        cars.sort(new Comparator<Car>() {    
            @Override
            public int compare(Car o1, Car o2) {
                // lhs - rhs >>>>> ASC
                return o1.getYear() - o2.getYear();;
            }
        });
        
        for(Car car: cars) {
            System.out.println("Element : " + car);
        }

    }

    
    public static void main(String[] args) {
        
        // question1();
        // question2();
        question3();
    }


}
