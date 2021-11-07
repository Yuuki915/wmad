package adminApp;

import java.net.URL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ResourceBundle;

import databaseUtil.dbConnection;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.TextField;
import javafx.scene.control.cell.PropertyValueFactory;

public class AdminController implements Initializable {

    @FXML
    private TextField id;
    @FXML
    private TextField name;
    @FXML
    private TextField department;
    @FXML
    private TextField daysAttended;

    @FXML
    private TableView<EmployeeData> employeeDataTableView;
    @FXML
    private TableColumn<EmployeeData, String> idColumn;
    @FXML
    private TableColumn<EmployeeData, String> nameColumn;
    @FXML
    private TableColumn<EmployeeData, String> departmentColumn;
    @FXML
    private TableColumn<EmployeeData, String> daysAttendedColumn;

    @FXML
    private Button loadBtn;
    @FXML
    private Button addEntryBtn;
    @FXML
    private Button clearBtn;

    private dbConnection dc;
    private ObservableList<EmployeeData> employeeData;

    @Override
    public void initialize(URL arg0, ResourceBundle arg1) {

        this.dc = new dbConnection();

    }

    @FXML
    public void loadEmployeeData(ActionEvent event) {
        String sql = "SELECT * FROM employees_tbl";

        try {
            Connection conn = dbConnection.getConnection();
            this.employeeData = FXCollections.observableArrayList();

            ResultSet resultSet = conn.createStatement().executeQuery(sql);

            while (resultSet.next()) {
                this.employeeData.add(new EmployeeData(resultSet.getString(1), resultSet.getString(2),
                        resultSet.getString(3), resultSet.getString(4)));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        this.idColumn.setCellValueFactory(new PropertyValueFactory<EmployeeData, String>("ID"));
        this.nameColumn.setCellValueFactory(new PropertyValueFactory<EmployeeData, String>("name"));
        this.departmentColumn.setCellValueFactory(new PropertyValueFactory<EmployeeData, String>("department"));
        this.daysAttendedColumn.setCellValueFactory(new PropertyValueFactory<EmployeeData, String>("daysAttended"));

        this.employeeDataTableView.setItems(null);
        this.employeeDataTableView.setItems(employeeData);

    }

    @FXML
    private void addEmployee(ActionEvent event) {

        String sql = "INSERT INTO employees_tbl (id, name, department, daysAttended) VALUES (?, ?, ?, ?)";
        PreparedStatement statement = null;

        try {
            Connection conn = dbConnection.getConnection();
            statement = conn.prepareStatement(sql);

            statement.setString(1, this.id.getText());
            statement.setString(2, this.name.getText());
            statement.setString(3, this.department.getText());
            statement.setString(4, this.daysAttended.getText());

            statement.execute();

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                statement.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

    }

    @FXML
    private void clearFields(ActionEvent event) {
        this.id.setText("");
        this.name.setText("");
        this.department.setText("");
        this.daysAttended.setText("");
    }

}
