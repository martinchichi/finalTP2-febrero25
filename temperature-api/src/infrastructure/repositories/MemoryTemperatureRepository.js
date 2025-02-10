import { ITemperatureRepository } from '../../domain/repositories/ITemperatureRepository.js';

export class MemoryTemperatureRepository extends ITemperatureRepository {
    constructor() {
        super();
        this.temperatures = [];
    }

    async save(temperature) {
        this.temperatures.push(temperature);
        return temperature;
    }

    async findInRange(min, max) {
        return this.temperatures.filter(temp => 
            temp.magnitude >= min && temp.magnitude <= max
        );
    }
}