export const ResultsSection = ({ totalSlices, pizzaNeed }) => {
  return (
    <div className="results-section">
      <p>Total Slices: {totalSlices}</p>
      <p>Pizzas Needed: {pizzaNeed}</p>
    </div>
  );
};
