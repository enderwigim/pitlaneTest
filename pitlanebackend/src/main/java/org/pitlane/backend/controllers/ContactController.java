package org.pitlane.backend.controllers;


import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class ContactController {

    @PostMapping(value = "/api/contact")
    public ResponseEntity<?> postContact(String json) throws IOException {

        System.out.print(json);
        return ResponseEntity.ok("Hello World");


    }
}
