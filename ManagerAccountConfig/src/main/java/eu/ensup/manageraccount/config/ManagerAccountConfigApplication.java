package eu.ensup.manageraccount.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class ManagerAccountConfigApplication {
    public static void main(String[] args) {
        SpringApplication.run(ManagerAccountConfigApplication.class, args);
    }
}
