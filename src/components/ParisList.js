import { selectAllParisCard } from "../slice/parisSliceCard";
import ParisCard from "./WorldCard";

const ParisList = () => {
  const cards = selectAllParisCard();

  return (
    <div className="col-span-5">
      <div>
        <h4 className="text-gray-700 text-4xl font-semibold leading-none tracking-wider mt-20">
          Lets Find Your Bar!
        </h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {cards.map((card) => {
          return (
            <div key={card.id}>
              <ParisCard card={card} className="row-span-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ParisList;
