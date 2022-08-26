import React, { useContext, useEffect, useState } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

const ToDoList = () => {
    const { todoList, toggleToDo, deleteToDo, activeFilters } =
        useContext(ToDoContext);

    const [localToDoList, setLocalToDoList] = useState([]);

    useEffect(() => {
        let activeToDoList = [];
        let completedToDoList = [];

        if (activeFilters.includes("active"))
            activeToDoList = todoList.filter((todo) => !todo.isCompleted);
        if (activeFilters.includes("completed"))
            completedToDoList = todoList.filter((todo) => todo.isCompleted);

        setLocalToDoList([...activeToDoList, ...completedToDoList]);
    }, [todoList, activeFilters]);

    return (
        <div className="todo_list">
            {localToDoList.map((todo) => {
                return (
                    <div key={todo.id} className="todo_item">
                        <div
                            className={`${
                                todo.isCompleted ? "completedTodo" : ""
                            } todo_title`}
                            onClick={() => {
                                toggleToDo(todo.id);
                            }}
                        >
                            {todo.title}
                        </div>

                        <span>
                            <i
                                className="bi bi-trash3"
                                onClick={() => {
                                    deleteToDo(todo.id);
                                }}
                            ></i>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default ToDoList;
