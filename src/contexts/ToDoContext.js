import { v4 as uuidv4 } from "uuid";
import React, { createContext, useState } from "react";

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([]);

    const addToDo = (title) => {
        const newToDo = {
            id: uuidv4(),
            isCompleted: false,
            title,
        };
        const tempToDo = [...todoList];
        setTodoList([newToDo, ...tempToDo]);
    };

    const deleteToDo = (id) => {
        const index = todoList.findIndex((todo) => todo.id === id);

        if (index > -1) {
            const tempToDo = [...todoList];
            tempToDo.splice(index, 1);
            setTodoList([...tempToDo]);
        }
    };

    const toggleToDo = (id) => {
        const index = todoList.findIndex((todo) => todo.id === id);

        if (index > -1) {
            const tempToDo = [...todoList];
            tempToDo[index].isCompleted = !tempToDo[index].isCompleted;
            setTodoList([...tempToDo]);
        }
    };

    const [activeFilters, setActiveFilters] = useState(["active", "completed"]);

    const toggleFilter = (key) => {
        const index = activeFilters.findIndex((filter) => filter === key);
        const tempFilters = [...activeFilters];

        if (index > -1) {
            tempFilters.splice(index, 1);
        } else {
            tempFilters.push(key);
        }

        setActiveFilters(tempFilters);
    };

    return (
        <ToDoContext.Provider
            value={{
                todoList,
                addToDo,
                deleteToDo,
                toggleToDo,

                activeFilters,
                toggleFilter,
            }}
        >
            {children}
        </ToDoContext.Provider>
    );
};
