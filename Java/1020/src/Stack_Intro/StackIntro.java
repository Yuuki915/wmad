package Stack_Intro;
import java.util.Stack;

public class StackIntro {
    
    public static void main(String[] args) {
        
        Stack<Integer> stackList = new Stack<>();

        stackList.push(0);
        stackList.push(1);
        stackList.push(2);
        stackList.push(3);
        stackList.push(4);
        stackList.push(5);
        System.out.println(stackList);
        System.out.println("-------");

        stackList.pop();
        System.out.println(stackList);
        System.out.println("-------");


        System.out.println(stackList.peek());
        System.out.println("-------");

        if(stackList.isEmpty()) {
            System.out.println("Stack is empty");
        } else {
            System.out.println("Stack is not empty");
        }

        // ###
        System.out.println(stackList.search(3));



    }
}
