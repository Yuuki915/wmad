package defaultPacage;

public class Dog extends Animal{

    final void sound(){
        System.out.println();
        System.out.println("Additional Caracteristics");
        System.out.println("Sound: wan wan");
    }

    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.characteristics();
        dog.sound();
    }
}
