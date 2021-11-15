-- INSERT EMPLOYEES

 INSERT INTO employee (employee_id, first_name,last_name, email) VALUES (1, 'Phil', 'Slater', 'phil@gmail.com');
 INSERT INTO employee (employee_id, first_name,last_name, email) VALUES (1, 'David', 'Dunn', 'david@gmail.com');
 INSERT INTO employee (employee_id, first_name,last_name, email) VALUES (1, 'Steve', 'Tyler', 'steve@gmail.com');
 INSERT INTO employee (employee_id, first_name,last_name, email) VALUES (1, 'Tasha', 'Connor', 'tasha@gmail.com');
 INSERT INTO employee (employee_id, first_name,last_name, email) VALUES (1, 'Prunnela', 'Sherman', 'punnela@gmail.com');


--INSERT PROJECTS

INSERT INTO project (project_id, name, stage, description) VALUES (1000, 'Push to production', 'NOT STARTED', 'Final depeloyment...');
INSERT INTO project (project_id, name, stage, description) VALUES (2000, 'Employee Budget', 'INPROGRESS', 'Decide on new employee bonus budget for the year...');
INSERT INTO project (project_id, name, stage, description) VALUES (3000, 'Intranet Security Feature', 'COMPLETED', 'Office security implemented...');

--INSERT PROJECT_EMPLOYYE RELATION

INSERT INTO project_employee (employee_id, project_id) VALUES(1, 1000);
INSERT INTO project_employee (employee_id, project_id) VALUES(3, 1000);
INSERT INTO project_employee (employee_id, project_id) VALUES(4, 1000);
INSERT INTO project_employee (employee_id, project_id) VALUES(2, 1000);
INSERT INTO project_employee (employee_id, project_id) VALUES(1, 1000);

-- SELECT * FROM EMPLOYEE;
-- SELECT FROM * PROJECT;
-- SELECT FROM PROJECT_EMPLOYEE;