package defaultPacage;
public class EmployeeDetails {
    
    final int id; // blank final variable

    EmployeeDetails(int idNum){
        id = idNum;
    }

    void getDetails(){
        System.out.println("Id of the Employee is: " + id);
    }

    public static void main(String[] args) {
        EmployeeDetails emp = new EmployeeDetails(15);
        emp.getDetails();


    }
}
