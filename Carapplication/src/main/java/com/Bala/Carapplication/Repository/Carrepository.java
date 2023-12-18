package com.Bala.Carapplication.Repository;

import com.Bala.Carapplication.Entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Carrepository extends JpaRepository<Car,Long> {
}
