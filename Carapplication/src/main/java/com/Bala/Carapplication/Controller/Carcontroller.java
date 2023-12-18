package com.Bala.Carapplication.Controller;

import com.Bala.Carapplication.Entity.Car;
import com.Bala.Carapplication.Service.Carservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Carcontroller {

    @Autowired
    private Carservice carservice;

    @GetMapping("/cars")
    @CrossOrigin()
    public List<Car> getcars(){
        return carservice.getCars();
    }
    @PostMapping("/cars")
    @CrossOrigin()
    public Car addCar(@RequestBody Car car){
        return  carservice.addCar(car);
    }
}
