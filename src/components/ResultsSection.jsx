import pizzaIcon from "../assets/images/pizzaIcon.png";

export const ResultsSection = ({ totalSlices, pizzaNeed }) => {
  return (
    <div className="results-section">
      <p>
        Total Slices: {totalSlices}{" "}
        <img src={pizzaIcon} className="pizza-icon" alt="pizza" />
      </p>
      <p>Pizzas Needed: {pizzaNeed}</p>
    </div>
  );
};
