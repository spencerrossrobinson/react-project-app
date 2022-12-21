import HomeCard from "../components/HomeCard";
import { selectAllCard } from "../slice/homeCardSlice";

const HomePage = () => {
  const cards = selectAllCard();
  return (
    <div className="col-span-5">
      <div>
        <h4 className="text-gray-700 text-4xl font-semibold leading-none tracking-wider mt-20">
          Begin Your Drinking Journey Here
        </h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {cards.map((card) => {
          return (
            <div key={card.id}>
              <HomeCard card={card} className="row-span-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
