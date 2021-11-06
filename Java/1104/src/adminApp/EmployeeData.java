package adminApp;

import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;

public class EmployeeData {

    private StringProperty ID;
    private StringProperty name;
    private StringProperty department;
    private StringProperty daysAttended;

    public EmployeeData(String id, String name, String department, String daysAttended) {
        this.ID = new SimpleStringProperty(id);
        this.name = new SimpleStringProperty(name);
        this.department = new SimpleStringProperty(department);
        this.daysAttended = new SimpleStringProperty(daysAttended);
    }

    // getters
    public String getID() {
        return (String) ID.get();
    }

    public String getName() {
        return (String) name.get();
    }

    public String getDepartment() {
        return (String) department.get();
    }

    public String getDaysAttended() {
        return (String) daysAttended.get();
    }

    // setters
    public void setID(String id) {
        this.ID.set(id);
    }

    public void setName(String name) {
        this.name.set(name);
        ;
    }

    public void setDepartment(String department) {
        this.department.set(department);
    }

    public void setDaysAttended(String daysAttended) {
        this.daysAttended.set(daysAttended);
        ;
    }

    // stringproperty methods
    public StringProperty IDProperty() {
        return ID;
    }

    public StringProperty nameProperty() {
        return name;
    }

    public StringProperty departmentProperty() {
        return department;
    }

    public StringProperty daysAttendedProperty() {
        return daysAttended;
    }

}
