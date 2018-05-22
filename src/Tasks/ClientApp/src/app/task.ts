import { Priority } from "./priority";

export interface Task {
    id: number;
    description: string;
    completed: boolean;
    priority: Priority;
  }
  