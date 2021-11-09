package com.example.demo.web;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Product;

@RestController
@RequestMapping("/user")
public class UserController {

    @RequestMapping("/{userId}")
    public String displayUser(@PathVariable String userId) {
        return "User found: " + userId;
    }

    @RequestMapping("/{userId}/invoices")
    public String displayUserInvoices(@PathVariable int userId,
            @RequestParam(value = "date", required = false) Date date) {
        return "Invoice found for user: " + userId + " on the date: " + date;
    }

    @RequestMapping("/{userId}/items")
    public List<String> displayStringJson() {
        return Arrays.asList("Pencil", "Ruler", "Erase");
    }

    @RequestMapping("/{userId}/products")
    public List<Product> displayProductJson() {
        return Arrays.asList(new Product(1, "Shoes", 25.99), new Product(1, "Bag", 55.99),
                new Product(1, "Book", 5.99));
    }
}