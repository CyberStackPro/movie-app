import React from "react";

interface Counters {
  id: number;
  value: number;
}
export interface Props {
  counters: Counters;
  incrementCount: (value: number) => void;
  decrementCount: (id: number) => void;
  onDelete: (id: number) => void;
}
const PageEco = ({
  counters,
  decrementCount,
  incrementCount,
  onDelete,
}: Props) => {
  const getClasses = (value: number) => {
    let classes = "badge text-lg m-2 bg-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <div className="d-flex m-2 flex-column align-items-start">
      <div
        className="d-flex flex-row justify-content-between align-items-center my-2"
        key={counters.id}
      >
        <div className="col-auto">
          <h1 className={getClasses(counters.value)}>{counters.value}</h1>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-secondary"
            onClick={() => incrementCount(counters.id)}
          >
            +
          </button>
          <button
            disabled={counters.value === 0}
            className="btn btn-secondary"
            onClick={() => decrementCount(counters.id)}
          >
            -
          </button>
          <button
            onClick={() => onDelete(counters.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageEco;
