package JRE_SystemLibrary;

import java.rmi.server.RemoteStub;
import java.util.LinkedList;
import java.util.List;


class Names {
    private String name;
    
    public Names(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return name;
    }

}


public class ObjectList {
    
    public static void main(String[] args) {
        
        List<Object> elements = new LinkedList<>();

        elements.add(new Names("Edward"));
        elements.add(new Names("Chris"));
        elements.add(new Names("John"));
        elements.add("Some String");
        elements.add(10);
        elements.add(2.5);

        System.out.println(elements);

    }
}
