// import { useEffect, useState } from "react";
// import { RANDOMCARD } from "../data/RANDOMPAGE";
import { Link } from "react-router-dom";
const RenderCard = ({ card }) => {
  const { id, image, name, description } = card;
  return (
    <Link to={`${id}`}>
      <div className="rounded-lg overflow-hidden shadow-xl mt-10 mx-auto w-4/5 bg-violet-400 p-4 hover:scale-110 transition duration-500 ease-in-out">
        <div className="relative">
          <img
            className="w-full rounded-lg h-80"
            src={image}
            alt="Sunset in the mountains"
          />
          <div className="container shadow">
            <div className="z-40 font-bold text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-violet-700 bg-gray-300 bg-opacity-90 rounded-md p-5 hover:scale-105 duration-500 ease-in-out">
              {name}
            </div>
          </div>
          <div className="absolute container px-6 pt-4 pb-2 rounded-sm bottom-4 left-1/2 -translate-x-1/2">
            <div className="m-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 opacity-80">
              {description}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default RenderCard;
