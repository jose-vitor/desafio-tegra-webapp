export class Flight {

    constructor() { }

    public static getFlighTime(flight) {

        let [arriveHour, arriveMinutes] = flight.arriveTime.split(":")
            .map(x => parseInt(x));
        let [departureHour, departureMinutes] = flight.departureTime.split(":")
            .map(x => parseInt(x));

        flight.time = `${arriveHour - departureHour}h${arriveMinutes - departureMinutes}min`;

        return flight;
    }
}