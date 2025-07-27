package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.service.exception.CountryNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import java.util.List;

@RestController
public class CountryController {

    @RequestMapping("/country")
    public Object getCountryIndia() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        return context.getBean("in");
    }

    @GetMapping("/countries")
    public List<Object> getAllCountries() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        return (List<Object>) context.getBean("countryList");
    }

    @GetMapping("/countries/{code}")
    public Object getCountry(@PathVariable String code) throws CountryNotFoundException {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        List<Object> countries = (List<Object>) context.getBean("countryList");
        return countries.stream()
            .filter(c -> c.toString().toLowerCase().contains(code.toLowerCase()))
            .findFirst()
            .orElseThrow(CountryNotFoundException::new);
    }
}