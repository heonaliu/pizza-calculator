import { useState } from "react";
export const InputSection = ({
  people,
  setPeople,
  slicesPerPerson,
  setSlicesPerPerson,
  slicePerPizza,
  setSlicePerPizza,
}) => {
  const handlePeopleChange = (e) => {
    let value = e.target.value;
    value = Number(value);

    if (isNaN(value)) return;

    value = Math.floor(value);

    if (value < 1) value = 1;

    setPeople(value);
  };

  const handleSlicePersonChange = (e) => {
    let value = e.target.value;
    value = Number(value);

    if (isNaN(value)) return;

    value = Math.floor(value);

    if (value < 1) value = 1;

    setSlicesPerPerson(value);
  };

  const handleSlicePizzaChange = (e) => {
    let value = e.target.value;
    value = Number(value);

    if (isNaN(value)) return;

    value = Math.floor(value);

    if (value < 1) value = 1;

    setSlicePerPizza(value);
  };

  return (
    <div className="inputs-section">
      <label>Number of People</label>
      <input type="number" value={people} onChange={handlePeopleChange} />
      <label>Slices Per Person</label>
      <input
        type="number"
        value={slicesPerPerson}
        onChange={handleSlicePersonChange}
      />
      <label>Slices Per Pizza</label>
      <input
        type="number"
        value={slicePerPizza}
        onChange={handleSlicePizzaChange}
        min="1"
        step="1"
      />
    </div>
  );
};
