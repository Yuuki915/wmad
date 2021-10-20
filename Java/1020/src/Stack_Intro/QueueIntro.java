package Stack_Intro;
import java.util.LinkedList;
import java.util.Queue;

public class QueueIntro {

    public static void main(String[] args) {
        
        Queue<Integer> q = new LinkedList<>();
        q.add(0);
        q.add(1);
        q.add(2);
        q.add(3);
        q.add(4);

        System.out.println("Element of queue " + q);

        int removed = q.remove();
        System.out.println("Removed element: " + removed);
        System.out.println("Element of queue " + q);

        int head = q.peek();
        System.out.println("Head of queue: " + head);
        System.out.println("Element of queue: " + q);

        int size = q.size();
        System.out.println("Size of queue: " + q);

        q.add(10);
        System.out.println("Element of queue" + q);
    }
    
}
