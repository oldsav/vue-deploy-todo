export interface ITodo {
  id: number;
  task: string;
  done: boolean;
  important: boolean;
  createdAt: number;
}

export interface ITodos {
  todos: Array<ITodo>;
}
