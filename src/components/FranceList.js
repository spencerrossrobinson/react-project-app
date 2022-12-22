import { selectAllFranceCard } from "../slice/franceCardSlice";
import FranceCard from "../components/FranceCard";

const FranceList = () => {
  const cards = selectAllFranceCard();

  return (
    <div className="col-span-5">
      <div>
        <h4 className="text-gray-700 text-4xl font-semibold leading-none tracking-wider mt-20">
          Choose Your City!
        </h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {cards.map((card) => {
          return (
            <div key={card.id}>
              <FranceCard card={card} className="row-span-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FranceList;
