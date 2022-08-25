import React, { createContext, useState } from "react";

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([]);

    const addToDo = () => {
        setTodoList(todoList);
    };

    const deleteToDo = () => {
        setTodoList(todoList);
    };

    const toggleToDo = () => {
        setTodoList(todoList);
    };

    /**
     * 0 - None
     * 1 - Active
     * 2 - Completed
     * 3 - All
     */
    const [activeFilter, setActiveFilter] = useState(3);

    return (
        <ToDoContext.Provider
            value={{
                todoList,
                addToDo,
                deleteToDo,
                toggleToDo,

                activeFilter,
                setActiveFilter,
            }}
        >
            {children}
        </ToDoContext.Provider>
    );
};
