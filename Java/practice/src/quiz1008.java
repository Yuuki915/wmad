
public class quiz1008 {
    
    public static void main(String[] args) {
        
        // 1
        int a = 15;
        int b = 25;
        if((a < b) || (a = 5) > 15) {
            System.out.println(a);
        } else {
            System.out.println(b);
        }


        // 14
        int x = 0;
        for(int j = 0; j < 100; j++) {
            for(int k = 100; k > 0; k--) {
                x++;
            }
        }
        System.out.println(x);

    }
}
