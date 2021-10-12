package com.m0921;

public abstract class Car {
    private String doors;
    private String engine;
    private String driver;
    private int speed;

    // public int getSpeed(){
    //     return speed;
    // }
    // public void getSpeed(int spd) {
    //     this.speed = spd;
    // }


    // constructor
    public Car() {
        doors = "closed";
        driver = "seated";
        engine = "on";
        speed = 5;
    }

    // parameterize constructor
    public Car(String doors,String engine, String driver, int speed){
        this.doors = doors;
        this.driver = driver;
        this.engine = engine;
        this.speed = speed;
    }


    public String getDoors(String doors){
        this.doors = doors;
    }
    public String getEngine() {
        return engine;
    }
    public void setEngine(String engine) {
        this.engine = engine;
    }
    public Sring getDriver() {
        return driver;
    }
    public void setDriver(String driver) {
        this.driver = driver;
    }
    public int getSpeed() {
        return speed;
    }
    public void setSpeed(int speed) {
        this.speed = speed;
    }
    public String run(){
        if(doors.equals("closed") && enaine.equals("on") && driver.equals("seated") && speed > 0){
            return "running";
        } else {
            return "not running";
        }
    }

}
