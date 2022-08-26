import React from "react";
import AddToDoInput from "./components/AddToDoInput";
import Filters from "./components/Filters";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

const App = () => {
    return (
        <div className="app">
            <Header />
            <AddToDoInput />
            <Filters />
            <ToDoList />
        </div>
    );
};

export default App;
