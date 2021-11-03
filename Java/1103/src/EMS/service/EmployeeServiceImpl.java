package EMS.service;

import java.util.List;

import EMS.dao.*;
import EMS.dto.*;
import EMS.exception.*;

public class EmployeeServiceImpl implements EmployeeService {

    public EmployeeDAO empDAO = new EmployeeDAOMySQLImpl();

    @Override
    public List<Employee> showAllEmployees() {
        return empDAO.showAllEmployees();
    }

    @Override
    public void addEmployee(Employee e) {
        empDAO.addEmployee(e);
    }

    @Override
    public void deleteEmployee(int id) {
        empDAO.deleteEmployee(id);

    }

    @Override
    public void updateEmployee(Employee e) {

    }

    @Override
    public Employee findEmployee(Employee e) throws EmployeeNotFoundException {
        return empDAO.findEmployee(e);
    }

}
