package Factory;

class Computer {

    private final String CPU;
    private final String RAM;
    private final String HardDiskType;
    private final String Monitor;
    private final String OS;

    private Computer(Builder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
        this.HardDiskType = builder.HardDiskType;
        this.Monitor = builder.Monitor;
        this.OS = builder.OS;
    }

    public static class Builder {
        private String CPU;
        private String RAM;
        private String HardDiskType;
        private String Monitor;
        private String OS;

        public Builder setCPU(String CPU) {
            this.CPU = CPU;
            return this;
        }

        public Builder setRAM(String RAM) {
            this.RAM = RAM;
            return this;
        }

        public Builder setHardDiskType(String HardDiskType) {
            this.HardDiskType = HardDiskType;
            return this;
        }

        public Builder setMonitor(String Monitor) {
            this.Monitor = Monitor;
            return this;
        }

        public Builder setOS(String OS) {
            this.OS = OS;
            return this;
        }

        public Computer build() {
            return new Computer(this);
        }
    }

    public void showConfig() {
        System.out.println("Computer Configuration:");
        System.out.println("CPU: " + CPU);
        System.out.println("RAM: " + RAM);
        System.out.println("Hard Disk: " + HardDiskType);
        System.out.println("Monitor: " + (Monitor != null ? Monitor : "Not Included"));
        System.out.println("OS: " + (OS != null ? OS : "Not Installed"));
        System.out.println();
    }
}

public class BuilderPattern {
    public static void main(String[] args) {
 
    	Computer.Builder gamingPCBuilder = new Computer.Builder();
        gamingPCBuilder.setCPU("Intel i9");
        gamingPCBuilder.setRAM("32GB");
        gamingPCBuilder.setHardDiskType("1TB SSD");
        gamingPCBuilder.setMonitor("27-inch 4K");
        gamingPCBuilder.setOS("Windows 11 Pro");
        Computer gamingPC = gamingPCBuilder.build();

        
        Computer.Builder officePCBuilder = new Computer.Builder();
        officePCBuilder.setCPU("Intel i5");
        officePCBuilder.setRAM("16GB");
        officePCBuilder.setHardDiskType("512GB SSD");
        officePCBuilder.setOS("Windows 10");
        Computer officePC = officePCBuilder.build();
        gamingPC.showConfig();
        officePC.showConfig();
    }
}
