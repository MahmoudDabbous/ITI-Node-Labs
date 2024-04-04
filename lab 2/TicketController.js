class FlightTicket {
  constructor(
    seatNum,
    flightNum,
    departureAirport,
    arrivalAirport,
    travellingDate
  ) {
    this.seatNum = seatNum;
    this.flightNum = flightNum;
    this.departureAirport = departureAirport;
    this.arrivalAirport = arrivalAirport;
    this.travellingDate = travellingDate;
  }

  displayInfo() {
    console.log(
      `Seat Number: ${this.seatNum}, Flight Number: ${this.flightNum}, Departure Airport: ${this.departureAirport}, Arrival Airport: ${this.arrivalAirport}, Travel Date: ${this.travelDate}`
    );
  }

  getSeatNum() {
    return this.seatNum;
  }

  getFlightNum() {
    return this.flightNum;
  }

  getDepartureAirport() {
    return this.departureAirport;
  }

  getArrivalAirport() {
    return this.arrivalAirport;
  }

  getTravellingDate() {
    return this.travellingDate;
  }

  updateSeatNum(newSeatNum) {
    this.seatNum = newSeatNum;
  }

  updateFlightNum(newFlightNum) {
    this.flightNum = newFlightNum;
  }

  updateDepartureAirport(newDepartureAirport) {
    this.departureAirport = newDepartureAirport;
  }

  updateArrivalAirport(newArrivalAirport) {
    this.arrivalAirport = newArrivalAirport;
  }

  updateTravellingDate(newTravellingDate) {
    this.travellingDate = newTravellingDate;
  }
}

module.exports = FlightTicket;
