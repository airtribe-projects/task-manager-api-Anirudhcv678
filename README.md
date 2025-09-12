# Task Manager API - TypeScript

A RESTful API for managing tasks, built with Node.js, Express, and TypeScript.

## Features

- **TypeScript**: Full type safety and modern JavaScript features
- **RESTful API**: Complete CRUD operations for tasks
- **Express.js**: Fast, unopinionated web framework
- **Strict Type Checking**: Comprehensive TypeScript configuration
- **Testing**: Automated tests with tap and supertest

## Project Structure

```
src/
├── types/           # TypeScript interfaces and types
│   └── Task.ts      # Task-related type definitions
├── data/            # Data layer
│   └── tasks.ts     # Task data and initial tasks
├── services/        # Business logic layer
│   └── taskService.ts # Task service with CRUD operations
├── controllers/     # Request/response handling
│   └── taskController.ts # Task controller functions
├── routes/          # Route definitions
│   ├── index.ts     # Main router
│   └── taskRoutes.ts # Task-specific routes
└── app.ts           # Express application setup
```

## API Endpoints

- `GET /tasks` - Get all tasks
- `GET /tasks/:id` - Get a specific task
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Build the TypeScript project:
```bash
npm run build
```

3. Start the server:
```bash
npm start
```

### Development

For development with auto-reload:
```bash
npm run dev
```

### Testing

Run the test suite:
```bash
npm test
```

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start the production server
- `npm run dev` - Start development server with auto-reload
- `npm test` - Run the test suite
- `npm run clean` - Remove build artifacts

## TypeScript Configuration

The project uses strict TypeScript configuration with:
- Strict null checks
- No implicit any
- Exact optional property types
- Comprehensive type checking

## Task Model

```typescript
interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
```

## Contributing

1. Make changes to TypeScript files in the `src/` directory
2. Run `npm run build` to compile
3. Run `npm test` to ensure tests pass
4. Commit your changes

## License

ISC
