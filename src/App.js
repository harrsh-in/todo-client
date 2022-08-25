import React, { useContext, useEffect } from "react";
import AddToDoInput from "./components/AddToDoInput";
import Filters from "./components/Filters";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { ToDoContext } from "./contexts/ToDoContext";

const App = () => {
    const { todoList } = useContext(ToDoContext);

    useEffect(() => {
        console.log(todoList);
    }, [todoList]);

    return (
        <div className="app">
            <Header />
            <Filters />
            <AddToDoInput />
            <ToDoList />
        </div>
    );
};

export default App;
