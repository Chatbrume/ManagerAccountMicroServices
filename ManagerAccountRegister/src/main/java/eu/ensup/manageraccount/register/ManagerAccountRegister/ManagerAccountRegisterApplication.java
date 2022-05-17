package eu.ensup.manageraccount.register.ManagerAccountRegister;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class ManagerAccountRegisterApplication
{
	public static void main(String[] args) {
		SpringApplication.run(ManagerAccountRegisterApplication.class, args);
	}
}
