package com.youtube.jwt.controller;

import com.youtube.jwt.dto.UserRegistrationRequest;
import com.youtube.jwt.entity.User;
import com.youtube.jwt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.validation.Valid;

@RestController
//@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    @PostMapping({"/registerNewUser"})

//    public User registerNewUser(@RequestBody @Valid UserRegistrationRequest userRegistrationRequest) {
//        return userService.registerNewUser(userRegistrationRequest);
//    }
    public ResponseEntity<?> registerNewUser(@RequestBody @Valid UserRegistrationRequest userRegistrationRequest) {
        // Check if the username is already registered
        if (userService.findByUserName(userRegistrationRequest.getUserName()) != null) {
            return ResponseEntity.badRequest().body("Username already exists");
        }

        // Register a new user
        User registeredUser = userService.registerNewUser(userRegistrationRequest);
        return ResponseEntity.ok(registeredUser);
    }



    @GetMapping({"/forAdmin"})
    @PreAuthorize("hasRole('Admin')")
    public String forAdmin(){
        return "This URL is only accessible to the admin";
    }

    @GetMapping({"/forUser"})
    @PreAuthorize("hasRole('User')")
    public String forUser(){
        return "This URL is only accessible to the user";
    }
}
