import BarHome from "../app/assets/barHomePage.jpeg";
import { useEffect, useState } from "react";
import { selectRandomCard } from "../slice/randomSlice";
import { selectAllCard } from "../slice/randomSlice";
import RenderCard from "./RandomCard";

const RandomHeader = () => {
  // const [cardDate, setCardData] = useState([])
  const [visible, setVisible] = useState(2);

  const cards = selectAllCard();

  const loadMore = () => {
    setVisible(visible + 2);
  };
  return (
    <div className="col-span-5">
      <div className="w-5/6 mx-auto">
        <div className="grid grid-cols-10">
          <div className="container row-span-full col-start-1 col-span-6 self-center bg-violet-400 rounded-xl shadow border p-5 m-10 h-80">
            <img src={BarHome} alt="" className="h-70 rounded-xl" />
          </div>
          <div className="container row-span-full col-span-6 col-end-11 self-center bg-violet-200 rounded-xl shadow border p-8 m-10">
            <p className="text-3xl text-gray-700 font-bold mb-5 flex justify-center">
              Let The Bartender Tell You Where You're Drinking!
            </p>
            <p className="text-gray-500 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium consequatur.
            </p>
            <a
              href=""
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block px-6 py-2.5 border-2 border-violet-600 text-violet-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-200 hover:shadow-lg focus:bg-slate-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-400 active:shadow-lg transition duration-150 ease-in-out"
            >
              Find Random Bar
            </a>
          </div>
        </div>
      </div>
      {/* <div className="w-5/6 mx-auto">
        <div className="grid grid-cols-10">
          <div className="z-40 container row-span-full col-start-1 col-span-6 self-center bg-violet-200 rounded-xl shadow border p-8 m-20">
            <p className="text-3xl text-gray-700 font-bold mb-5 flex justify-center">
              Welcome to the Best Bars in the World!
            </p>
            <p className="text-gray-500 text-lg">
              React and Tailwind CSS in action
            </p>
          </div>
          <div className="z-0 container row-span-full col-start-5 col-span-11 self-center bg-violet-400 rounded-xl shadow border p-5 m-10 h-80">
            <img src={BarHome} alt="" className="h-70 rounded-xl" />
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {cards.map((card) => {
          return (
            <div key={card.id}>
              <RenderCard card={card} className="row-span-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RandomHeader;
