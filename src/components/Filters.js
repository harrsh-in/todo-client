import React, { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

const Filters = () => {
    const { activeFilters, toggleFilter } = useContext(ToDoContext);

    return (
        <div className="filters">
            <div
                className={`filter ${
                    activeFilters.includes("active") ? "selected" : ""
                }`}
                onClick={() => {
                    toggleFilter("active");
                }}
            >
                <p>#active</p>
            </div>

            <div
                className={`filter ${
                    activeFilters.includes("completed") ? "selected" : ""
                }`}
                onClick={() => {
                    toggleFilter("completed");
                }}
            >
                <p>#completed</p>
            </div>
        </div>
    );
};

export default Filters;
