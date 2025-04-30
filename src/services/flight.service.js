const {FlightsRepository, AirplaneRepository} = require('../repository/index')
const {compareTime} = require('../utils/helper')

class FlightService{
    constructor() {
        this.airplaneRepository = new AirplaneRepository()
        this.flightRepository = new FlightsRepository()
    }
    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: 'arrivalTime cannot be less than departueTime'}
            }
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