package Java.Y1012.src.homework.src;
import Java.Y1012.src.homework.src.hw.animals.Reptile;

public class Main {

    public static void main(String[] args) {

        Reptile reptile = new Reptile(10, 5, "Reptile", "A-");
        System.out.println(reptile.toString());

        Fish fish = new Fish(10, 5, "Fish", "A-");
        System.out.println(fish.toString());

        Birds birds = new Birds(10, 5, "Birds", "A-");
        System.out.println(birds.toString());



    }
}
