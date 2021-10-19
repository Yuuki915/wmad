package defaultPacage;

public class FinalRefarenceVariable {

    public static void main(String[] args) {
        
        final StringBuilder builder = new StringBuilder("One");

        System.out.println(builder);

        builder.append("Two");

        System.out.println(builder);

    }
    
}
