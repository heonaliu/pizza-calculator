import { InputSection } from "./InputsSection";
import { Reset } from "./Reset";
import { ResultsSection } from "./ResultsSection";
import { useState } from "react";
export const PartyCalculator = () => {
  const [people, setPeople] = useState(0);
  const [slicesPerPerson, setSlicesPerPerson] = useState(1);
  const [slicePerPizza, setSlicePerPizza] = useState(8);

  const totalSlices = people * slicesPerPerson;
  const pizzaNeed = Math.ceil(totalSlices / slicePerPizza);

  const handleReset = () => {
    setPeople(0);
    setSlicesPerPerson(1);
    setSlicePerPizza(8);
  };

  return (
    //passing values to input and results as props to children
    <div className="card">
      <InputSection
        people={people}
        setPeople={setPeople}
        slicesPerPerson={slicesPerPerson}
        setSlicesPerPerson={setSlicesPerPerson}
        slicePerpizza={slicePerPizza}
        setSlicePerPizza={setSlicePerPizza}
      />
      <ResultsSection totalSlices={totalSlices} pizzaNeed={pizzaNeed} />
      <Reset onClick={handleReset} />
    </div>
  );
};
