import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="md:col-span-1 md:flex md:justify-end bg-violet-200">
      <nav className="text-right">
        <div className="flex justify-between items-center">
          <h1 className="font-bold uppercase p-4 border-b border-gray-100">
            <Link to="/">
              <div className="hover:text-gray-600 tracking-widest">
                Thirsty.
              </div>
            </Link>
          </h1>
        </div>
        <ul className="text-sm mt-6 hidden md:block" id="menu">
          <div className="text-gray-700 font-bold py-1">
            <Link to="/">
              <div className="block px-4 flex justify-end border-r-4 border-primary">
                Home
              </div>
            </Link>
          </div>
          <div className="py-1">
            <Link to="/random">
              <div className="mt-3 block px-4 flex justify-end border-r-4 border-white">
                Random
              </div>
            </Link>
          </div>
          <div className="py-1">
            <Link to="/contact">
              <div className="mt-3 block px-4 flex justify-end border-r-4 border-white">
                Contact
              </div>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
