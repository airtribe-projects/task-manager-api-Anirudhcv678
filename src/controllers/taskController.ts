import { Request, Response } from 'express';
import { CreateTaskRequest, UpdateTaskRequest } from '../types/Task';
import taskService from '../services/taskService';

export const getAllTasks = (req: Request, res: Response): void => {
  try {
    const tasks = taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getTaskById = (req: Request, res: Response): void => {
  try {
    const taskId = parseInt(req.params.id as string);
    
    if (isNaN(taskId)) {
      res.status(400).json({ error: 'Invalid task ID' });
      return;
    }

    const task = taskService.getTaskById(taskId);
    
    if (!task) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createTask = (req: Request<{}, {}, CreateTaskRequest>, res: Response): void => {
  try {
    const { title, description, completed } = req.body;

    if (!title || !description) {
      res.status(400).json({ error: 'Title and description are required' });
      return;
    }

    const newTask = taskService.createTask({ 
      title, 
      description, 
      completed: completed ?? false 
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateTask = (req: Request<{ id: string }, {}, UpdateTaskRequest>, res: Response): void => {
  try {
    const taskId = parseInt(req.params.id as string);
    
    if (isNaN(taskId)) {
      res.status(400).json({ error: 'Invalid task ID' });
      return;
    }

    const { title, description, completed } = req.body;

    if (completed !== undefined && typeof completed !== 'boolean') {
      res.status(400).json({ error: 'Completed must be a boolean value' });
      return;
    }

    const updateData: UpdateTaskRequest = {};
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (completed !== undefined) updateData.completed = completed;

    const updatedTask = taskService.updateTask(taskId, updateData);
    
    if (!updatedTask) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteTask = (req: Request, res: Response): void => {
  try {
    const taskId = parseInt(req.params.id as string);
    
    if (isNaN(taskId)) {
      res.status(400).json({ error: 'Invalid task ID' });
      return;
    }

    const deleted = taskService.deleteTask(taskId);
    
    if (!deleted) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
