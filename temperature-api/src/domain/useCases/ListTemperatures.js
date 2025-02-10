export class ListTemperatures {
    constructor(temperatureRepository) {
        this.temperatureRepository = temperatureRepository;
    }

    async execute(min, max) {
        if (min > max) {
            throw new Error('El rango mínimo no puede ser mayor al máximo');
        }
        return await this.temperatureRepository.findInRange(min, max);
    }
}