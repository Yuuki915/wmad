package EMS.service;

import java.util.List;
import EMS.dto.*;
import EMS.exception.*;

public interface EmployeeService {

    public List<Employee> showAllEmployees();

    public abstract void addEmployee(Employee e);

    public abstract void deleteEmployee(int id);

    public abstract void updateEmployee(Employee e);

    public abstract Employee findEmployee(Employee e) throws EmployeeNotFoundException;
}
