package Quiz;

import java.util.Scanner;

import javax.sql.rowset.spi.SyncFactory;

public class Quiz {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int numCor = 0;

        System.out.println("=============");
        System.out.println(" Quiz World");
        System.out.println("=============");

        System.out.println("Question1");
        System.out.println("What's my name?");
        System.out.println("[1] Yuri");
        System.out.println("[2] Yuki");
        System.out.println("[3] Yumi");
        System.out.println("[4] Yuka");

        Integer ans = scanner.nextInt();
        if (ans.equals(2)) {
            System.out.println("Correct!!");
            System.out.println("\n");
            System.out.println("-------------");
            numCor++;
        } else {
            System.out.println("Noooope");
            System.out.println("-------------");
        }

        System.out.println("\n");
        System.out.println("Question3");
        System.out.println("Where am I from?");
        System.out.println("[1] Fukuoka");
        System.out.println("[2] Osaka");
        System.out.println("[3] Tokyo");
        System.out.println("[4] Kyoto");

        ans = scanner.nextInt();
        if (ans.equals(1)) {
            System.out.println("Correct!!");
            System.out.println("\n");
            System.out.println("-------------");
            numCor++;
        } else {
            System.out.println("Noooope");
            System.out.println("\n");
            System.out.println("-------------");
        }

        System.out.println("\n");
        System.out.println("Question2");
        System.out.println("What's my favorite?");
        System.out.println("[1] eating");
        System.out.println("[2] sleeping");
        System.out.println("[3] traveling");
        System.out.println("[4] all the above");

        ans = scanner.nextInt();
        if (ans.equals(4)) {
            System.out.println("Correct!!");
            System.out.println("\n");
            System.out.println("-------------");
            numCor++;
        } else {
            System.out.println("Noooope");
            System.out.println("\n");
            System.out.println("-------------");
        }

        int questions = 3;
        double score = (100 * numCor) / 3;

        System.out.println("\n");
        System.out.println("RESULT: " + numCor + "/" + questions);
        System.out.println("AVERAGE: " + score);

        if (score == 100) {
            System.out.println("You know me!!!");
            System.out.println("Let's grab some beer!!!");
        } else {
            System.out.println("You need to know me more!!!");
            System.out.println("You'd better to grab some beer with me!!!");
        }

        System.out.println("\n");

    }
}
