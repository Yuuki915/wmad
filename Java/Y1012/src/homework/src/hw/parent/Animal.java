package Java.Y1012.src.homework.src.hw.parent;


public class Animal {

    public static int height;
    public int weight;
    public String animalType;
    public String bloodType;

    // public Vehicle() {
	// 	this.engine = "petrol";
	// 	this.wheels = 4;
	// 	this.seats = 4;
	// 	this.fuelTank = 35;
	// 	this.lights = "LED";
	// }

    public Animal(int height, int weight, String animalType, String bloodType) {
        this.height = height;
        this.weight = weight;
        this.animalType = animalType;
        this.bloodType = bloodType;
    }

    public int getHeight() {
        return height;
    }

    public int getWeight() {
        return weight;
    }

    public String getAnimalType() {
        return animalType;
    }

    public String getBloodType() {
        return bloodType;
    }

}
