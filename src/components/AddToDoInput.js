import React from "react";

const AddToDoInput = () => {
    return (
        <div className="add_todo">
            <input class="form-control" id="newToDo" placeholder="Add a ToDo" />

            <button type="button" class="btn btn-primary">
                Add
            </button>
        </div>
    );
};

export default AddToDoInput;
