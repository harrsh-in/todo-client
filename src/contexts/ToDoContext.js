import React, { createContext, useState } from "react";

const initialState = {
    todo: [],
};

export const ToDoContext = createContext(initialState);

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

    return (
        <ToDoContext.Provider
            value={{
                todoList,

                addToDo,
                deleteToDo,
                toggleToDo,
            }}
        >
            {children}
        </ToDoContext.Provider>
    );
};
