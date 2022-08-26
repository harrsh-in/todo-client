import React, { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

const ToDoList = () => {
    const { todoList, toggleToDo, deleteToDo } = useContext(ToDoContext);

    return (
        <div className="todo_list">
            {todoList.map((todo) => {
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
