import React, { useState } from "react";
import PageEco from "./PageEco";
import NavBar from "./NavBar";

const EcoApp = () => {
  const [count, setCount] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleIncrement = (id: number) => {
    // setCount(
    //   count.map((c) => (c.id === id ? { ...c, value: c.value + 1 } : c))
    // );
    const counters = [...count];

    const index = counters.findIndex((c) => c.id === id);
    if (index !== -1) {
      counters[index] = {
        ...counters[index],
        value: counters[index].value + 1,
      };
    }

    setCount(counters);

    // console.log("Counters Index", (counters[index] = { ...id }));
  };

  const handleDecrement = (id: number) => {
    // const counters = [...count];
    // const index = counters.findIndex((c) => c.id === id);
    // if (index !== -1)
    //   counters[index] = {
    //     ...counters[index],
    //     value: counters[index].value - 1,
    //   };

    setCount(
      count.map((c) => (c.id === id ? { ...c, value: c.value - 1 } : c))
    );
  };
  const onReset = () => {
    setCount(
      count.map((c) => {
        c.value = 0;
        return c;
      })
    );
  };
  return (
    <div className="">
      <NavBar getTotalCounters={count.filter((c) => c.value > 0).length} />

      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {count.map((c) => (
        <PageEco
          counters={c}
          onDelete={(id) => setCount(count.filter((c) => c.id !== id))}
          incrementCount={handleIncrement}
          decrementCount={handleDecrement}
        />
      ))}
    </div>
  );
};

export default EcoApp;
