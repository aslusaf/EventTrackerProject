export class Flight {
  id: number;
  flightDate: string | null;
  aircraftType: string | null;
  aircraftIdentifier: string | null;
  aircraftName: string | null;
  departingAirportIdentifier: string | null;
  departingAirportName: string | null;
  arrivingAirportIdentifier: string | null;
  arrivingAirportName: string | null;
  distanceFlown: number;
  flightType: string | null;
  dayTakeoffs: number;
  nightTakeoffs: number;
  dayLandings: number;
  nightLandings: number;
  instrumentApproaches: number;
  singleEngine: number;
  multiEngine: number;
  pilotInCommand: number;
  secondInCommand: number;
  dualReceived: number;
  instructorExaminerCheckpilot: number;
  technicallyAdvancedAircraft: number;
  crossCountry: number;
  night: number;
  actualInstrument: number;
  simulatedInstrument: number;
  simulatorTime: number;
  totalDuration: number;
  remarks: string | null;

  constructor(
    id: number = 0,
    flightDate: string | null = "",
    aircraftType: string | null = "",
    aircraftIdentifier: string | null = "",
    aircraftName: string | null = "",
    departingAirportIdentifier: string | null = "",
    departingAirportName: string | null = "",
    arrivingAirportIdentifier: string | null = "",
    arrivingAirportName: string | null = "",
    distanceFlown: number = 0,
    flightType: string | null = "",
    dayTakeoffs: number = 0,
    nightTakeoffs: number = 0,
    dayLandings: number = 0,
    nightLandings: number = 0,
    instrumentApproaches: number = 0,
    singleEngine: number = 0,
    multiEngine: number = 0,
    pilotInCommand: number = 0,
    secondInCommand: number = 0,
    dualReceived: number = 0,
    instructorExaminerCheckpilot: number = 0,
    technicallyAdvancedAircraft: number = 0,
    crossCountry: number = 0,
    night: number = 0,
    actualInstrument: number = 0,
    simulatedInstrument: number = 0,
    simulatorTime: number = 0,
    totalDuration: number = 0,
    remarks: string | null = ""
  ) {
    this.id = id;
    this.flightDate = flightDate;
    this.aircraftType = aircraftType;
    this.aircraftIdentifier = aircraftIdentifier;
    this.aircraftName = aircraftName;
    this.departingAirportIdentifier = departingAirportIdentifier;
    this.departingAirportName = departingAirportName;
    this.arrivingAirportIdentifier = arrivingAirportIdentifier;
    this.arrivingAirportName = arrivingAirportName;
    this.distanceFlown = distanceFlown;
    this.flightType = flightType;
    this.dayTakeoffs = dayTakeoffs;
    this.nightTakeoffs = nightTakeoffs;
    this.dayLandings = dayLandings;
    this.nightLandings = nightLandings;
    this.instrumentApproaches = instrumentApproaches;
    this.singleEngine = singleEngine;
    this.multiEngine = multiEngine;
    this.pilotInCommand = pilotInCommand;
    this.secondInCommand = secondInCommand;
    this.dualReceived = dualReceived;
    this.instructorExaminerCheckpilot = instructorExaminerCheckpilot;
    this.technicallyAdvancedAircraft = technicallyAdvancedAircraft;
    this.crossCountry = crossCountry;
    this.night = night;
    this.actualInstrument = actualInstrument;
    this.simulatedInstrument = simulatedInstrument;
    this.simulatorTime = simulatorTime;
    this.totalDuration = totalDuration;
    this.remarks = remarks;
  }
}
