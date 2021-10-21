import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;

class Data<T> {
    private T myVariable;

    public Data(T myVariable) {
        super();
        this.myVariable = myVariable;
    }

    public T getMyVariable() {
        return myVariable;
    }

    @Override
    public String toString() {
        return "Data [myVariable= " + myVariable + "]";
    }

}

public class UserDefinedType {
    public static void main(String[] args) {
        
        List<Data<Integer>> elements = new LinkedList<>();
        elements.add(new Data<>(1));
        elements.add(new Data<>(2));
        elements.add(new Data<>(3));
        elements.add(new Data<>(4));
        elements.add(new Data<>(5));

        printList(elements);
        
    }

    static void printList(List<Data<Integer>> list) {
        ListIterator<Data<Integer>> iterator = list.listIterator();
        while(iterator.hasNext()) {
            System.out.println("Element: " + iterator.next());
        }

    }

}
