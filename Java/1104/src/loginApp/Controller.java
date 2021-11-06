package loginApp;

import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;

import adminApp.AdminController;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.layout.Pane;
import javafx.stage.Stage;

public class Controller implements Initializable {

    LoginModel loginModel = new LoginModel();

    @FXML
    private Label dbStatus;
    @FXML
    private TextField username;
    @FXML
    private PasswordField password;
    @FXML
    private Button loginBtn;
    @FXML
    private Label loginStatus;

    @Override
    public void initialize(URL arg0, ResourceBundle arg1) {

        if (this.loginModel.isDatabaseConnected()) {
            this.dbStatus.setText("Connected");
        } else {
            this.dbStatus.setText("Not Connected");
        }

    }

    @FXML
    public void Login(ActionEvent event) {

        try {
            if (this.loginModel.isLogin(this.username.getText(), this.password.getText())) {
                // this.loginStatus.setText("You have successfully logged in");

                Stage stage = (Stage) this.loginBtn.getScene().getWindow();
                stage.close();

                adminLogin();

            } else {
                this.loginStatus.setText("Wrong Credentials");
            }
        } catch (Exception e) {
            // TODO: handle exception
        }
    }

    public void adminLogin() {

        try {

            Stage userStage = new Stage();
            FXMLLoader adminLoader = new FXMLLoader();
            Pane root = (Pane) adminLoader.load(getClass().getResource("/adminApp/Admin.fxml").openStream());

            AdminController adminController = (AdminController) adminLoader.getController();

            Scene scene = new Scene(root);
            scene.getRoot().setStyle("-fx-font-family: 'sans-serif'");
            userStage.setScene(scene);
            userStage.setTitle("Admin Dashboard");
            userStage.setResizable(false);
            userStage.show();

        } catch (IOException e) {
            e.printStackTrace();
        }

    }

}