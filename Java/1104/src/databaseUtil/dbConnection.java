package databaseUtil;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class dbConnection {

    private static final String USERNAME = "root";
    private static final String PASSWORD = "Yuuki5196";
    private static final String CONN = "jdbc:mysql://localhost:3306/employees_database";

    public static Connection getConnection() {

        try {
            return DriverManager.getConnection(CONN, USERNAME, PASSWORD);
        } catch (SQLException e) {
            System.out.println("Unable to establish the connection with DB");
            e.printStackTrace();
        }

        return null;
    }
}
