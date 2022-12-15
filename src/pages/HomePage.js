import BarHome from "../app/assets/barHomePage.jpeg";

const HomePage = () => {
  return (
    <div>
      <div className="wrap w-5/6 mx-auto">
        <div className="grid grid-cols-10">
          <div className="container row-span-full col-start-1 col-span-6 self-center bg-violet-400 rounded-xl shadow border p-5 m-10 h-80">
            <img src={BarHome} alt="" className="h-70 rounded-xl" />
          </div>
          <div className="container row-span-full col-span-6 col-end-11 self-center bg-violet-200 rounded-xl shadow border p-8 m-10">
            <p className="text-3xl text-gray-700 font-bold mb-5 flex justify-center">
              Welcome to the Best Bars in the World!
            </p>
            <p className="text-gray-500 text-lg">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium consequatur omnis minus necessitatibus quas a at
              consectetur error doloremque? Id dolores vero eum cumque tempora
              aliquam modi fugiat iusto commodi?{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="wrap w-5/6 mx-auto">
        <div className="grid grid-cols-10">
          <div className="container row-span-full col-start-1 col-span-6 self-center bg-violet-200 rounded-xl shadow border p-8 m-20">
            <p className="text-3xl text-gray-700 font-bold mb-5 flex justify-center">
              Welcome to the Best Bars in the World!
            </p>
            <p className="text-gray-500 text-lg">
              React and Tailwind CSS in action
            </p>
          </div>
          <div className="container row-span-full col-start-5 col-span-11 self-center bg-violet-400 rounded-xl shadow border p-5 m-10 h-80">
            <img src={BarHome} alt="" className="h-70 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
