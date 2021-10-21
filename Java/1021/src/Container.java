public class Container<i1, i2> {

    i1 item1;
    i2 item2;

    public Container(i1 item1, i2 item2) {
        this.item1 = item1;
        this.item2 = item2;
    }

    public void printItems() {
        System.out.println("Printing contents of a container:");
        System.out.println("Item1: " + item1);
        System.out.println("Item2: " + item2);
    }
    
    // public i1 getItem1() {
    //     return item1;
    // }
    // public i1 getItem2() {
    //     return item2;
    // }
    // public String setItem1(String) {
    //     this.item1 = item1;
    // }
    // public String setItem1(String) {
    //     this.item2 = item2;
    // }

}
