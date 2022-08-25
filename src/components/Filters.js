import React, { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

const Filters = () => {
    const { activeFilter } = useContext(ToDoContext);

    return (
        <div className="filters">
            <div
                className={`filter ${
                    [1, 3].includes(activeFilter) ? "selected" : ""
                }`}
            >
                <p>#active</p>
            </div>

            <div
                className={`filter ${
                    [2, 3].includes(activeFilter) ? "selected" : ""
                }`}
            >
                <p>#completed</p>
            </div>
        </div>
    );
};

export default Filters;
