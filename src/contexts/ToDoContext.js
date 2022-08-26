import React, { createContext, useState } from "react";

const initialToDoList = [
    {
        id: 3,
        isCompleted: false,
        title: "Test 4",
    },
    {
        id: 2,
        isCompleted: true,
        title: "Test 3",
    },
    {
        id: 1,
        isCompleted: false,
        title: "Test 2",
    },
    {
        id: 0,
        isCompleted: true,
        title: "Test 1",
    },
];

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState(initialToDoList);

    const addToDo = (title) => {
        const newToDo = {
            id: todoList[0].id + 1,
            isCompleted: false,
            title,
        };
        const tempToDo = [...todoList];
        setTodoList([newToDo, ...tempToDo]);
    };

    const deleteToDo = (id) => {
        const index = todoList.findIndex((todo) => todo.id === id);
        const tempToDo = [...todoList];
        tempToDo.splice(index, 1);
        setTodoList([...tempToDo]);
    };

    const toggleToDo = (id) => {
        const index = todoList.findIndex((todo) => todo.id === id);
        const tempToDo = [...todoList];
        tempToDo[index].isCompleted = !tempToDo[index].isCompleted;
        setTodoList([...tempToDo]);
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
