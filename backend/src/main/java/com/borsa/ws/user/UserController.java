package com.borsa.ws.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {

    private static final Logger log = LoggerFactory.getLogger((UserController.class));

    @Autowired
    UserService userService;

    @PostMapping("/api/1.0/user")
    public void createUser(@RequestBody User body) {// Kullanıcı kaydeder
        userService.save(body);
        log.info(body.toString());
    }

    @GetMapping("/api/1.0/users")
    public List<User> getUsers() {// Bütün kullaınıcılar getirir
        log.info("Find All is run");
        return userService.findAll();
    }

    @GetMapping("/api/1.0/user/{id}")
    public Object getUser(@PathVariable long id) {
        log.info("Get User is run");
        return userService.findById(id);
    }

    @DeleteMapping(("/api/1.0/user/{id}"))
    public void deleteUser(@PathVariable long id){
        log.info("Delete User is run");
        userService.deleteUser(id);
    }

    @PutMapping("api/1.0/user")
    public void updateUser(@RequestBody User body){
        log.info("Update User is run");
        userService.save(body);
    }


}
