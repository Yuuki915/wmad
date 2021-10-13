package Java.Y1012.src.homework.src.hw.animals;
import Java.Y1012.src.homework.src.hw.parent.Animal;


public class Reptile extends Animal {

    public Reptile(int height, int weight, String animalType, String bloodType) {
        super(height, weight, animalType, bloodType);

    }

    private String drySkin;
    private String backBorn;
    private String softShelledEggs;


    public String getSkin() {
        return drySkin;
    }

    public String getBorn() {
        return backBorn;
    }

    public String getEggs() {
        return softShelledEggs;
    }

    @Override
	public String toString() {
		return "Crocodile [getSkin()=" + getSkin() + ", getBorn()=" + getBorn() + ", getEggs()=" + getEggs()+ "]";
	}
}