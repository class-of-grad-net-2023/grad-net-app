import React, { useState } from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";
import todolist from "./../data/todos.json";
import ToDoList from "./components/ToDoList.js";

export default function Display_todolist()
{
    const [todos, setTodos] = useState(todolist);
    const [page, setPage] = useState(0);
    return (
        <ToDoList
            todos={todos}
            page={page}
            onRemoveTodo={id => {
                const newToDoList = todos.filter(todo => todo.id !== id);
                setTodos(newToDoList);
            }}
            onChangeCompleted={id => {
                setTodos((todos) =>
                    todos.map((todo) => (todo.id === id ? { userId: todo.userId, id: todo.id, title: todo.title, completed: todo.completed^1}: todo))
                );
            }}
            onNextPage={() => {
                setPage(page + 1);
            }}
            onPreviousPage={() =>{
                setPage(page - 1);
            }}
            />
    );
}


ReactDOM.render(<Display_todolist />, document.getElementById("root"));