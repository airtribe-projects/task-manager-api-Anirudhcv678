import { Task, CreateTaskRequest, UpdateTaskRequest } from '../types/Task';
import tasks from '../data/tasks';

class TaskService {
  private tasks: Task[] = [...tasks];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  createTask(taskData: CreateTaskRequest): Task {
    const newTask: Task = {
      id: Math.max(...this.tasks.map(t => t.id), 0) + 1,
      title: taskData.title,
      description: taskData.description,
      completed: taskData.completed ?? false
    };
    
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: number, taskData: UpdateTaskRequest): Task | null {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    
    if (taskIndex === -1) {
      return null;
    }

    const currentTask = this.tasks[taskIndex]!;
    const updatedTask: Task = {
      id: currentTask.id,
      title: taskData.title ?? currentTask.title,
      description: taskData.description ?? currentTask.description,
      completed: taskData.completed ?? currentTask.completed
    };

    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  deleteTask(id: number): boolean {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    
    if (taskIndex === -1) {
      return false;
    }

    this.tasks.splice(taskIndex, 1);
    return true;
  }
}

export default new TaskService();
