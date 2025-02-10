import { Temperature } from '../entities/Temperature.js';

export class CreateTemperature {
    constructor(temperatureRepository) {
        this.temperatureRepository = temperatureRepository;
    }

    async execute(magnitude, unit) {
        try {
            const temperature = new Temperature(magnitude, unit);
            return await this.temperatureRepository.save(temperature);
        } catch (error) {
            throw error;
        }
    }
}