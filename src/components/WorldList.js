import { selectAllWorldCard } from "../slice/worldCardSlice";
import WorldCard from "./WorldCard";

const WorldList = () => {
  const cards = selectAllWorldCard();
  // const { directoryId } = useParams();

  return (
    <div className="col-span-5">
      <div>
        <h4 className="text-gray-700 text-4xl font-semibold leading-none tracking-wider mt-20">
          Where Are We Going?
        </h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {cards.map((card) => {
          return (
            <div key={card.id}>
              <WorldCard card={card} className="row-span-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorldList;
