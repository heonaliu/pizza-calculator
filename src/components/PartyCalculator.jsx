import { InputSection } from "./InputsSection";
import { ResultsSection } from "./ResultsSection";
import { useState } from "react";
export const PartyCalculator = () => {
  const [people, setPeople] = useState(0);
  const [slicesPerPerson, setSlicesPerPerson] = useState(1);
  const [slicePerPizza, setSlicePerPizza] = useState(8);

  const totalSlices = people * slicesPerPerson;
  const pizzaNeed = Math.ceil(totalSlices / slicePerPizza);

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
    </div>
  );
};
