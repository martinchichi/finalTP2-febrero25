import express from 'express';
import { temperatureRoutes } from './presentation/routes/temperatureRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use('/api', temperatureRoutes);


app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({
        errorMsg: 'Algo salió mal!'
    });
});

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

export { app };