package com.skilldistillery.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.Flight;
import com.skilldistillery.repositories.FlightRepository;

@Service
public class FlightServiceImpl implements FlightService {

	@Autowired
	FlightRepository flightRepo;

	@Override
	public List<Flight> index() {
		return flightRepo.findAll();
	}

	@Override
	public Flight findById(int id) {
		return flightRepo.findById(id);
	}

	@Override
	public Flight createNewFlight(Flight flight) {

		if (flight != null) {

			flightRepo.save(flight);

		}

		return flight;
	}

	@Override
	public Flight updateFlight(int id, Flight update) {

		update.setId(id);

		if (flightRepo.existsById(id)) {
			return flightRepo.saveAndFlush(update);
		}

		return null;

	}

	@Override
	public boolean deleteFlight(int id) {

		if (flightRepo.existsById(id)) {
			flightRepo.deleteById(id);
		}

		return (flightRepo.existsById(id)) ? false : true;
	}

}
