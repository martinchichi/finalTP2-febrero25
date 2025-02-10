import { CreateTemperature } from '../../domain/useCases/CreateTemperature.js';
import { ListTemperatures } from '../../domain/useCases/ListTemperatures.js';
import { MemoryTemperatureRepository } from '../repositories/MemoryTemperatureRepository.js';

export class TemperatureFactory {
    static createUseCases() {
        const repository = new MemoryTemperatureRepository();
        
        return {
            createTemperature: new CreateTemperature(repository),
            listTemperatures: new ListTemperatures(repository)
        };
    }
}