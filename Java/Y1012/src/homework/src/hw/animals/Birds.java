package src.homework.src.hw.animals;
import src.homework.src.hw.parent.Animal;


public class Birds extends Animal{

    protected boolean feather;
    protected boolean canFly;

    public Birds() {
        super();
        this.feather = true;
        this.canFly = true;
    }

    

}



// ---
// public class Birds extends Animal {

//     public Birds(int height, int weight, String animalType, String blood) {
//         super(height, weight, animalType, blood);
//     }

//     private String withFeathers;
//     private String canFly;

//     public String getFeathers() {
//         return withFeathers;
//     }
//     public String getFly() {
//         return canFly;
//     }


//     @Override
// 	public String toString() {
// 		return "Birds [getFeathers()=" + getFeathers() + ", getFly()=" + getFly() + ", getHeight()=" + getHeight()
// 				+ ", getWeight()=" + getWeight() + ", getAnimalType()=" + getAnimalType() + ", getBlood()=" + getBlood() + "]";
// 	}
// }