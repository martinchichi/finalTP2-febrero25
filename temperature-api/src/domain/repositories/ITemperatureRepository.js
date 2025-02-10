export class ITemperatureRepository {
    async save(temperature) {
        throw new Error('Método no implementado');
    }

    async findInRange(min, max) {
        throw new Error('Método no implementado');
    }
}