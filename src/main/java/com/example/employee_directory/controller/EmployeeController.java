package com.example.employee_directory.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Map;

@Controller
public class EmployeeController {

    @GetMapping("/")
    public String showDashboard(Model model) {
        List<Map<String, Object>> employees = List.of(
            Map.of("id", 1, "firstName", "John", "lastName", "Doe", "email", "john@example.com", "department", "HR", "role", "Manager"),
            Map.of("id", 2, "firstName", "Jane", "lastName", "Smith", "email", "jane@example.com", "department", "IT", "role", "Developer")
        );

        model.addAttribute("employees", employees);
        return "index"; // renders index.ftlh
    }
}
