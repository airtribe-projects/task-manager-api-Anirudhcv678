import express from 'express';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', routes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req: express.Request, res: express.Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server only if this file is run directly
if (require.main === module) {
  app.listen(port, (err?: Error) => {
    if (err) {
      return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on port ${port}`);
  });
}

export default app;
