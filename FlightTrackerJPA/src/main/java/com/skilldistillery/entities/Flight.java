package com.skilldistillery.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
public class Flight {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "flight_date")
	private LocalDate flightDate;

	@Column(name = "aircraft_type")
	private String aircraftType;

	@Column(name = "aircraft_identifier")
	private String aircraftIdentifier;

	@Column(name = "aircraft_name")
	private String aircraftName;

	@Column(name = "departing_airport_identifier")
	private String departingAirportIdentifier;

	@Column(name = "departing_airport_name")
	private String departingAirportName;

	@Column(name = "arriving_airport_identifier")
	private String arrivingAirportIdentifier;

	@Column(name = "arriving_airport_name")
	private String arrivingAirportName;

	@Column(name = "distance_flown")
	private int distanceFlown;

	@Column(name = "flight_type")
	private String flightType;

	@Column(name = "day_takeoffs")
	private int dayTakeoffs;

	@Column(name = "night_takeoffs")
	private int nightTakeoffs;

	@Column(name = "day_landings")
	private int dayLandings;

	@Column(name = "night_landings")
	private int nightLandings;

	@Column(name = "instrument_approaches")
	private int instrumentApproaches;

	@Column(name = "single_engine")
	private double singleEngine;

	@Column(name = "multi_engine")
	private double multiEngine;

	@Column(name = "pilot_in_command")
	private double pilotInCommand;

	@Column(name = "second_in_command")
	private double secondInCommand;

	@Column(name = "dual_received")
	private double dualReceived;

	@Column(name = "instructor_examiner_checkpilot")
	private double instructorExaminerCheckpilot;

	@Column(name = "technically_advanced_aircraft")
	private double technicallyAdvancedAircraft;

	@Column(name = "cross_country")
	private double crossCountry;

	private double night;

	@Column(name = "actual_instrument")
	private double actualInstrument;

	@Column(name = "simulated_instrument")
	private double simulatedInstrument;

	@Column(name = "simulator_time")
	private double simulatorTime;

	@Column(name = "total_duration")
	private double totalDuration;

	private String remarks;

	@CreationTimestamp
	@Column(name = "created", updatable = false)
	private LocalDateTime created;

	@UpdateTimestamp
	private LocalDateTime updated;

	public Flight() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDate getFlightDate() {
		return flightDate;
	}

	public void setFlightDate(LocalDate flightDate) {
		this.flightDate = flightDate;
	}

	public String getAircraftType() {
		return aircraftType;
	}

	public void setAircraftType(String aircraftType) {
		this.aircraftType = aircraftType;
	}

	public String getAircraftIdentifier() {
		return aircraftIdentifier;
	}

	public void setAircraftIdentifier(String aircraftIdentifier) {
		this.aircraftIdentifier = aircraftIdentifier;
	}

	public String getAircraftName() {
		return aircraftName;
	}

	public void setAircraftName(String aircraftName) {
		this.aircraftName = aircraftName;
	}

	public String getDepartingAirportIdentifier() {
		return departingAirportIdentifier;
	}

	public void setDepartingAirportIdentifier(String departingAirportIdentifier) {
		this.departingAirportIdentifier = departingAirportIdentifier;
	}

	public String getDepartingAirportName() {
		return departingAirportName;
	}

	public void setDepartingAirportName(String departingAirportName) {
		this.departingAirportName = departingAirportName;
	}

	public String getArrivingAirportIdentifier() {
		return arrivingAirportIdentifier;
	}

	public void setArrivingAirportIdentifier(String arrivingAirportIdentifier) {
		this.arrivingAirportIdentifier = arrivingAirportIdentifier;
	}

	public String getArrivingAirportName() {
		return arrivingAirportName;
	}

	public void setArrivingAirportName(String arrivingAirportName) {
		this.arrivingAirportName = arrivingAirportName;
	}

	public Integer getDistanceFlown() {
		return distanceFlown;
	}

	public void setDistanceFlown(Integer distanceFlown) {
		this.distanceFlown = distanceFlown;
	}

	public String getFlightType() {
		return flightType;
	}

	public void setFlightType(String flightType) {
		this.flightType = flightType;
	}

	public Integer getDayTakeoffs() {
		return dayTakeoffs;
	}

	public void setDayTakeoffs(Integer dayTakeoffs) {
		this.dayTakeoffs = dayTakeoffs;
	}

	public Integer getNightTakeoffs() {
		return nightTakeoffs;
	}

	public void setNightTakeoffs(Integer nightTakeoffs) {
		this.nightTakeoffs = nightTakeoffs;
	}

	public Integer getDayLandings() {
		return dayLandings;
	}

	public void setDayLandings(Integer dayLandings) {
		this.dayLandings = dayLandings;
	}

	public Integer getNightLandings() {
		return nightLandings;
	}

	public void setNightLandings(Integer nightLandings) {
		this.nightLandings = nightLandings;
	}

	public Integer getInstrumentApproaches() {
		return instrumentApproaches;
	}

	public void setInstrumentApproaches(Integer instrumentApproaches) {
		this.instrumentApproaches = instrumentApproaches;
	}

	public Double getSingleEngine() {
		return singleEngine;
	}

	public void setSingleEngine(Double singleEngine) {
		this.singleEngine = singleEngine;
	}

	public Double getMultiEngine() {
		return multiEngine;
	}

	public void setMultiEngine(Double multiEngine) {
		this.multiEngine = multiEngine;
	}

	public Double getPilotInCommand() {
		return pilotInCommand;
	}

	public void setPilotInCommand(Double pilotInCommand) {
		this.pilotInCommand = pilotInCommand;
	}

	public Double getSecondInCommand() {
		return secondInCommand;
	}

	public void setSecondInCommand(Double secondInCommand) {
		this.secondInCommand = secondInCommand;
	}

	public Double getDualReceived() {
		return dualReceived;
	}

	public void setDualReceived(Double dualReceived) {
		this.dualReceived = dualReceived;
	}

	public Double getInstructorExaminerCheckpilot() {
		return instructorExaminerCheckpilot;
	}

	public void setInstructorExaminerCheckpilot(Double instructorExaminerCheckpilot) {
		this.instructorExaminerCheckpilot = instructorExaminerCheckpilot;
	}

	public Double getTechnicallyAdvancedAircraft() {
		return technicallyAdvancedAircraft;
	}

	public void setTechnicallyAdvancedAircraft(Double technicallyAdvancedAircraft) {
		this.technicallyAdvancedAircraft = technicallyAdvancedAircraft;
	}

	public Double getCrossCountry() {
		return crossCountry;
	}

	public void setCrossCountry(Double crossCountry) {
		this.crossCountry = crossCountry;
	}

	public Double getNight() {
		return night;
	}

	public void setNight(Double night) {
		this.night = night;
	}

	public Double getActualInstrument() {
		return actualInstrument;
	}

	public void setActualInstrument(Double actualInstrument) {
		this.actualInstrument = actualInstrument;
	}

	public Double getSimulatedInstrument() {
		return simulatedInstrument;
	}

	public void setSimulatedInstrument(Double simulatedInstrument) {
		this.simulatedInstrument = simulatedInstrument;
	}

	public Double getSimulatorTime() {
		return simulatorTime;
	}

	public void setSimulatorTime(Double simulatorTime) {
		this.simulatorTime = simulatorTime;
	}

	public Double getTotalDuration() {
		return totalDuration;
	}

	public void setTotalDuration(Double totalDuration) {
		this.totalDuration = totalDuration;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public LocalDateTime getCreated() {
		return created;
	}

	public void setCreated(LocalDateTime created) {
		this.created = created;
	}

	public LocalDateTime getUpdated() {
		return updated;
	}

	public void setUpdated(LocalDateTime updated) {
		this.updated = updated;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Flight other = (Flight) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Flight [id=" + id + ", flightDate=" + flightDate + ", aircraftType=" + aircraftType
				+ ", aircraftIdentifier=" + aircraftIdentifier + ", aircraftName=" + aircraftName
				+ ", departingAirportIdentifier=" + departingAirportIdentifier + ", departingAirportName="
				+ departingAirportName + ", arrivingAirportIdentifier=" + arrivingAirportIdentifier
				+ ", arrivingAirportName=" + arrivingAirportName + ", distanceFlown=" + distanceFlown + ", flightType="
				+ flightType + ", dayTakeoffs=" + dayTakeoffs + ", nightTakeoffs=" + nightTakeoffs + ", dayLandings="
				+ dayLandings + ", nightLandings=" + nightLandings + ", instrumentApproaches=" + instrumentApproaches
				+ ", singleEngine=" + singleEngine + ", multiEngine=" + multiEngine + ", pilotInCommand="
				+ pilotInCommand + ", secondInCommand=" + secondInCommand + ", dualReceived=" + dualReceived
				+ ", instructorExaminerCheckpilot=" + instructorExaminerCheckpilot + ", technicallyAdvancedAircraft="
				+ technicallyAdvancedAircraft + ", crossCountry=" + crossCountry + ", night=" + night
				+ ", actualInstrument=" + actualInstrument + ", simulatedInstrument=" + simulatedInstrument
				+ ", simulatorTime=" + simulatorTime + ", totalDuration=" + totalDuration + ", remarks=" + remarks
				+ ", created=" + created + ", updated=" + updated + "]";
	}

}
