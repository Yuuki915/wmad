package Autboxing_Unboxing.Unboxing;

import javax.swing.plaf.synth.SynthPanelUI;

public class CaseOne {
    
    public static void myMethod(int num) {
        System.out.println(num);
    }

    public static void main(String[] args) {
        Integer intObject = new Integer(100);
        myMethod(intObject);
    }
}
