package CheckedAndUncheckedException;

import java.io.*;
// import java.io.File;
// import java.io.FileReader;
// import java.io.IOException;

public class CheckedException {
    public static void main(String[] args) throws IOException{
    
        File file = new File("/assets/file.txt");
        FileReader fr = new FileReader(file);

        System.out.println("Success");


        // if(!isCorrectFileName(fileName)) {
        //     throw new ncorrectFileNameException("File name is invaliable");
        // }
    }
}
