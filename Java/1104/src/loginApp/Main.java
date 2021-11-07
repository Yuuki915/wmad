package loginApp;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.stage.Stage;
import javafx.scene.Parent;
import javafx.scene.Scene;

public class Main extends Application {
    @Override
    public void start(Stage primaryStage) throws Exception {

        // Set up a root node
        Parent root = FXMLLoader.load(getClass().getResource("Login.fxml"));

        // Set up a scene
        primaryStage.setTitle("Employee Management System");
        primaryStage.setScene(new Scene(root));
        primaryStage.show();

    }

    public static void main(String[] args) {
        launch(args);
    }
}