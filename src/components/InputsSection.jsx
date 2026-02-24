import { useState } from "react";
export const InputSection = ({
  people,
  setPeople,
  slicesPerPerson,
  setSlicesPerPerson,
  slicePerPizza,
  setSlicePerPizza,
}) => {
  return (
    <div className="inputs-section">
      <label>Number of People</label>
      <input
        type="number"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />
      <label>Slices Per Person</label>
      <input
        type="number"
        value={slicesPerPerson}
        onChange={(e) => setSlicesPerPerson(e.target.value)}
      />
      <label>Slices Per Pizza</label>
      <input
        type="number"
        value={slicePerPizza}
        onChange={(e) => setSlicePerPizza(e.target.value)}
      />
    </div>
  );
};
