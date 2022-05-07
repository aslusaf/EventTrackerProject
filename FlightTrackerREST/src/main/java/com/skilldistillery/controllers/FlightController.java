package com.skilldistillery.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.Flight;
import com.skilldistillery.services.FlightService;

@RequestMapping("api")
@RestController
public class FlightController {

	@Autowired
	FlightService serv;

	@GetMapping("flights")
	public List<Flight> findAllFlights(HttpServletResponse res) {

		List<Flight> flights = serv.index();

		if (flights == null) {
			res.setStatus(404);
		}
		return flights;

	}

	@GetMapping("flights/{id}")
	public Flight findFlightById(@PathVariable int id, HttpServletResponse res) {

		Flight flight = serv.findById(id);

		if (flight == null) {
			res.setStatus(404);
		}
		return flight;

	}

	@PostMapping("flights")
	public Flight createNewFlight(@RequestBody Flight flight, HttpServletRequest req, HttpServletResponse res) {

		try {
			serv.createNewFlight(flight);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL().append("/").append(flight.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}

		return flight;
	}

	@PutMapping("flights/{id}")
	public Flight updateFlight(@RequestBody Flight update, @PathVariable int id, HttpServletResponse res) {

		Flight flight;
		try {
			flight = serv.updateFlight(id, update);
			if (flight == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			flight = null;
		}

		return flight;
	}

	@DeleteMapping("flights/{id}")
	public void deleteFlight(@PathVariable int id, HttpServletResponse res) {

		try {
			if (serv.deleteFlight(id)) {

				res.setStatus(204);

			} else {

				res.setStatus(404);

			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}

	}

}
