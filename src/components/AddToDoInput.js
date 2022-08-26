import React, { useContext, useState } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

const AddToDoInput = () => {
    const { addToDo } = useContext(ToDoContext);

    const [title, setTitle] = useState("");

    const handleAddToDo = (e) => {
        e.preventDefault();
        addToDo(title);
        setTitle("");
    };

    return (
        <form className="add_todo" onSubmit={handleAddToDo}>
            <input
                className="form-control"
                id="newToDo"
                placeholder="Add a ToDo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
            />

            <button type="submit" className="btn btn-primary">
                Add
            </button>
        </form>
    );
};

export default AddToDoInput;
