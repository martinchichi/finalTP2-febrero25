import { TemperatureFactory } from '../../infrastructure/factories/TemperatureFactory.js';

export class TemperatureController {
    constructor() {
        const useCases = TemperatureFactory.createUseCases();
        this.createTemperature = useCases.createTemperature;
        this.listTemperatures = useCases.listTemperatures;
    }

    async create(req, res) {
        try {
            const { magnitude, unit } = req.body;
            
            if (!magnitude || !unit) {
                return res.status(400).json({
                    errorMsg: 'Magnitude y unit son campos requeridos'
                });
            }

            const temperature = await this.createTemperature.execute(magnitude, unit);
            res.status(201).json(temperature);
        } catch (error) {
            res.status(400).json({ errorMsg: error.message });
        }
    }

    async list(req, res) {
        try {
            const { min, max } = req.query;
            
            if (!min || !max) {
                return res.status(400).json({
                    errorMsg: 'Los parámetros min y max son requeridos'
                });
            }

            const temperatures = await this.listTemperatures.execute(
                parseFloat(min),
                parseFloat(max)
            );
            
            res.status(200).json(temperatures);
        } catch (error) {
            res.status(400).json({ errorMsg: error.message });
        }
    }
}