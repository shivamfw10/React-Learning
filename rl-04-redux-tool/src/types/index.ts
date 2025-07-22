export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

export interface CounterState {
  value: number;
}

export interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}
