package singleton;
public class LoggerTest {

    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("info", "Application started");

        Logger logger2 = Logger.getInstance();
        logger2.log("warning", "Low memory warning");

    
        if (logger1 == logger2) {
            System.out.println("Same Logger instance used (Singleton confirmed).");
        } else {
            System.out.println("Different instances found (Singleton failed).");
        }
    }
}
