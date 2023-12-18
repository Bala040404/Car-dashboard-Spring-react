package com.Bala.Carapplication.Service;

import com.Bala.Carapplication.Entity.Car;
import com.Bala.Carapplication.Repository.Carrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Carservice {
    @Autowired
    private Carrepository carrepository;
    public List<Car> getCars(){
        return carrepository.findAll();
    }

    public Car addCar(Car car){
        return carrepository.save(car);
    }
}
