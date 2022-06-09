package eu.ensup.manageraccount.service.controller;

import eu.ensup.manageraccount.service.entity.User;
import eu.ensup.manageraccount.service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "auth")
@CrossOrigin(origins="*")
public class AuthenticationController
{
    @Autowired
    private UserRepository userRepository;

    @GetMapping(path="/login", produces="application/json")
    public @ResponseBody User login(@RequestBody User user)
    {
        User finduser = userRepository.findByUsername(user.getUsername()).orElse(null);

        if( finduser != null && user.getPassword().equals(finduser.getPassword()) )
            return finduser;

        return null;
    }
}
