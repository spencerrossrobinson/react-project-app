import LittleImg from "../app/assets/cure.jpg";
const randomCard = Math.floor(Math.random() * 14);

const Cure = () => {
  return (
    <div className="col-span-5 mx-auto my-auto">
      <div className="rounded-lg overflow-hidden shadow-xl w-3/5 m-5 mx-auto my-auto bg-violet-400 p-4 hover:scale-110 transition duration-500 ease-in-out">
        <img className="w-full" src={LittleImg} alt="Little Red Door" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Cure - New Orleans - $$$</div>
          <p className="text-gray-900">
            &#9733; &#9733; &#9733; &#9733; &#9733;
          </p>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Minima laboriosam quaerat veniam
            porro.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Cure
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #ThirstyInOrleans
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #StayThirsty
          </span>
        </div>
        <a
          href={randomCard}
          type="submit"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          class="inline-block px-6 py-2.5 border-2 border-slate-100 text-violet-900 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-200 hover:shadow-lg focus:bg-slate-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-400 active:shadow-lg transition duration-150 ease-in-out mt-5"
        >
          Find me Another Bar
        </a>
      </div>
    </div>
  );
};

export default Cure;
