package com.spring.pma.dao;

import java.util.List;
import com.spring.pma.entity.Employee;
import org.springframework.data.repository.CrudRepository;

public interface iEmployeeRepository extends CrudRepository<Employee, Long> {

    @Override
    public List<Employee> findAll();
}