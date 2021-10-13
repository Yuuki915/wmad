package  inheritance.parent;

public class Vehicle {

    public String engine;
    public int wheels;
    public int seats;
    public int fuelTank;
    private String lights;

    public Vehicle() {
        this.engine = "petrol";
        this.wheels = 4;
        this.seats = 4;
        this.fuelTank = 35;
        this.lights = "LED";
    }

    public Vehicle(String engine, int wheels, int seats, int fealTank, String lights){
        this.engine = engine;
        this.wheels = wheels;
        this.seats = seats;
        this.fuelTank = fealTank;
        this.lights = lights;
    }

    public String getEngine(){
        return engine;
    }

    public int getWheels(){
        return wheels;
    }
    public int getSeats() {
        return seats;
    }

    public int getFuelTank() {
        return fuelTank;
    }

    public String getLights() {
        return lights;
    }

    public String run() {
        return "Hello";
    }
}