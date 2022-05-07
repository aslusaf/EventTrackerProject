package com.skilldistillery.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class FlightTests {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Flight flight;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("FlightTrackerJPA");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		flight = em.find(Flight.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		flight = null;
	}

	@Test
	@DisplayName("Testing flight Basic Mappings")
	void test_Flight_Basic_Entity_Mappings() {
		
		assertNotNull(flight);
		assertEquals("2022-01-15", flight.getFlightDate().toString());
		assertEquals("C172NAVIII", flight.getAircraftType());
		assertEquals("N412ER", flight.getAircraftIdentifier());
		assertEquals("Cessna 172 SP", flight.getAircraftName());
		assertEquals("KDAB", flight.getDepartingAirportIdentifier());
		assertEquals("Daytona Beach International Airport", flight.getDepartingAirportName());
		assertEquals("KDAB", flight.getArrivingAirportIdentifier());
		assertEquals("Daytona Beach International Airport", flight.getArrivingAirportName());
		assertEquals(75, flight.getDistanceFlown());
		assertEquals("VFR", flight.getFlightType());
		assertEquals(2, flight.getDayTakeoffs());
		assertEquals(0, flight.getNightTakeoffs());
		assertEquals(2, flight.getDayLandings());
		assertEquals(0, flight.getNightLandings());
		assertEquals(0, flight.getInstrumentApproaches());
		assertEquals(2.7, flight.getSingleEngine());
		assertEquals(0.0, flight.getMultiEngine());
		assertEquals(2.7, flight.getPilotInCommand());
		assertEquals(0.0, flight.getSecondInCommand());
		assertEquals(2.7, flight.getDualReceived());
		assertEquals(0.0, flight.getInstructorExaminerCheckpilot());
		assertEquals(0.0, flight.getTechnicallyAdvancedAircraft());
		assertEquals(0.0, flight.getCrossCountry());
		assertEquals(0.0, flight.getNight());
		assertEquals(0.0, flight.getActualInstrument());
		assertEquals(0.0, flight.getSimulatedInstrument());
		assertEquals(0.0, flight.getSimulatorTime());
		assertEquals(2.7, flight.getTotalDuration());
		assertEquals("FA 121 M08 FLT07", flight.getRemarks());
		
		
	}

}
