package com.m0921;

public class Main {
    public static void main(String[] args) {

        Car car = new Car("closed", "off", "seated", 0);
        
        // car.setDoors("closed");
        // car.setDriver("seated");
        // car.setEngine("on");
        // car.setSpeed(15);

        // System.out.println(car.run());
        // System.out.println(car.getSpeed());
        // System.out.println(car.getDoors());
        // System.out.println(car.getDriver());
        // System.out.println(car.getEngine());
        
        System.out.println(car.run());

    }
}
