package com.skilldistillery.services;

import java.util.List;

import com.skilldistillery.entities.Flight;

public interface FlightService {

	List<Flight> index();
	Flight findById(int id);
	Flight createNewFlight(Flight flight);
	Flight updateFlight(int id, Flight update);
	boolean deleteFlight(int id);
	
}
