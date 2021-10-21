
package homework.src.hw.parent;


public class Animal {

    protected float heightInFeet;
    protected float weightInKilos;
    protected String animalType;
    protected String bloodType;

    public Animal() {
        this.heightInFeet = 0;
        this.weightInKilos = 0;
        this.animalType = "unknown";
        this.bloodType = "unknown";
    }

    public String ShowInfo() {
        return "Birds [feather=" + feather + "canFly=" + canFly + "";
    }

    // public static int height;
    // public int weight;
    // public String animalType;
    // public String bloodType;

    // public Vehicle() {
	// 	this.engine = "petrol";
	// 	this.wheels = 4;
	// 	this.seats = 4;
	// 	this.fuelTank = 35;
	// 	this.lights = "LED";
	// }

    // public Animal(int height, int weight, String animalType, String bloodType) {
    //     this.height = height;
    //     this.weight = weight;
    //     this.animalType = animalType;
    //     this.bloodType = bloodType;
    // }

    // public int getHeight() {
    //     return height;
    // }

    // public int getWeight() {
    //     return weight;
    // }

    // public String getAnimalType() {
    //     return animalType;
    // }

    // public String getBloodType() {
    //     return bloodType;
    // }

}
