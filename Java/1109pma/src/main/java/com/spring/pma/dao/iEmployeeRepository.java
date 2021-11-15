package com.spring.pma.dao;

import java.util.List;

import com.spring.pma.dto.EmployeeProject;
import com.spring.pma.entity.Employee;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface iEmployeeRepository extends CrudRepository<Employee, Long> {

    @Override
    public List<Employee> findAll();

    @Query(nativeQuery = true, value = "SELECT e.first_name as firstName, e.last_name as lastName, "
            + "COUNT(pe.employee_id) as projectCount " + "FROM employee e "
            + "LEFT JOIN project_employee pe ON e.employee_id = pe.employee_id "
            + "GROUP BY e.first_name, e.last_name ORDER BY # DESC;")
    public List<EmployeeProject> employeeProject();
}