package financial;

public class FinancialForecast {

    public static double forecastValue(double initialValue, double growthRate, int periods) {
        if (periods == 0) {
            return initialValue;
        }
        return forecastValue(initialValue * (1 + growthRate), growthRate, periods - 1);
    }

    public static double forecastIterative(double initialValue, double growthRate, int periods) {
        for (int i = 0; i < periods; i++) {
            initialValue *= (1 + growthRate);
        }
        return initialValue;
    }

    public static void main(String[] args) {
        double initialValue = 1000.0;
        double growthRate = 0.05;     
        int periods = 5;         

        double futureValueRecursive = forecastValue(initialValue, growthRate, periods);
        double futureValueIterative = forecastIterative(initialValue, growthRate, periods);

        System.out.printf("Recursive Forecast after %d years: %.2f%n", periods, futureValueRecursive);
        System.out.printf("Iterative Forecast after %d years: %.2f%n", periods, futureValueIterative);
    }
}
