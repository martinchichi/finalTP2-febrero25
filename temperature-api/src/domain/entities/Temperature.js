export class Temperature {
    constructor(magnitude, unit) {
        this.validateUnit(unit);
        this.magnitude = magnitude;
        this.unit = unit;
        this.timestamp = new Date();
    }

    validateUnit(unit) {
        const validUnits = ['celsius', 'farenheit', 'kelvin'];
        if (!validUnits.includes(unit.toLowerCase())) {
            throw new Error('Unidad de temperatura inválida');
        }
    }

    toJSON() {
        return {
            magnitude: this.magnitude,
            unit: this.unit,
            timestamp: this.timestamp
        };
    }
}