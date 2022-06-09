package eu.ensup.manageraccount.service.controller;

import eu.ensup.manageraccount.service.entity.User;
import eu.ensup.manageraccount.service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "users")
@CrossOrigin(origins="*")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping(path = "/", produces="application/json")
    public List<User> getAll()
    {
        return userRepository.findAll();
    }
}
