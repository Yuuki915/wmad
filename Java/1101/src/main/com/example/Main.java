package com.example;

import java.sql.*;

public class Main {

    public static void main(String[] args) {
        String url = "jdbc:mysql://127.0.0.1:3306/employees_database";
        String user = "root";
        String password = "Yuuki5196";

        try {
            Connection conn = DriverManager.getConnection(url, user, password);

            Statement statement = conn.createStatement();

            ResultSet resultSet = statement.executeQuery("SELECT * FROM employees_tbl");

            while (resultSet.next()) {
                System.out.println(resultSet.getString("name"));
            }

        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }
    }

}
