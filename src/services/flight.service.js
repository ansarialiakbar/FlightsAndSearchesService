const {FlightsRepository, AirplaneRepository} = require('../repository/index')

class FlightService{
    constructor() {
        this.airplaneRepository = new AirplaneRepository()
        this.flightRepository = new FlightsRepository()
    }
    async createFlight(data){
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId)
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity
            });
            return flight;
            
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error}    
        }
    }

    async getFlightData(){

    }

}

module.exports = FlightService;