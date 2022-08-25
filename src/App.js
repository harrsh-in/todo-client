import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import { ToDoContext } from "./contexts/ToDoContext";

const App = () => {
    const { todoList } = useContext(ToDoContext);

    useEffect(() => {
        console.log(todoList);
    }, [todoList]);

    return (
        <div className="app">
            <Header />
        </div>
    );
};

export default App;
