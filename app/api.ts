import { Task } from "./types";


export const getAllTodos = async (): Promise<Task []>=> {
  const res = await fetch(`http://localhost:3001/task`, {
    cache: "no-store",
  });
  const todos = res.json();

  return todos;
};

export const addTodo = async (todo: Task): Promise<Task>=> {
  const res = await fetch(`http://localhost:3001/task`, {
    method: "POST",
    headers : {
      "Content-type" : "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = res.json();

  return newTodo;
};

export const editTodo = async (id: string, newText: string): Promise<Task>=> {
  const res = await fetch(`http://localhost:3001/task/${id}`, {
    method: "PUT",
    headers : {
      "Content-type" : "application/json",
    },
    body: JSON.stringify({text: newText}),
  });
  const updatedTodo = res.json();

  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<Task>=> {
  const res = await fetch(`http://localhost:3001/task/${id}`, {
    method: "DELETE",
    headers : {
      "Content-type" : "application/json",
    },
  });
  const deleteTodo = res.json();

  return deleteTodo;
};