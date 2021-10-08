// for loop

public class forLoop07 {
    public static void main(String[] args) {
        
        for(int i = 1000; i >= 1; i--) {
            System.out.println("Value of i: ");
            System.out.println(i);
        }

        int num = 10;
        boolean isPrime = true;

        for(int i = 2; i < num/2; i++) {
            if(num % i == 0) {
                isPrime = false;
            }
        }

        if(isPrime == true) {
            System.out.println("The number is a prime number");
        } else {
            System.out.println("The number is not a prime number");
        }

    }
}
