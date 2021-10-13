package Java.Y1012.src.homework.src.hw.animals;
import Java.Y1012.src.homework.src.hw.parent.Animal;


public class Fish extends Animal{

    public Fish(int height, int weight, String animalType, String blood) {
        super(height, weight, animalType, blood);

    }

    private String liveInWater;
    private String hasGills;

    public String getLiveIn() {
        return liveInWater;
    }
    public String getHas() {
        return hasGills;
    }

    @Override
	public String toString() {
		return "Fish [getLiveIn()=" + getLiveIn() + ", getHas()=" + getHas() + ", getHeight()=" + getHeight()
				+ ", getWeight()=" + getWeight() + ", getAnimalType()=" + getAnimalType() + ", getBlood()=" + getBlood() + "]";
	}
}
