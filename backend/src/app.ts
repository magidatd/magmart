import express from 'express';
import cors from 'cors';

import itemRoutes from './routes/item-routes';
import { errorHandler } from './middleware/error-handler';

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/items', itemRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
