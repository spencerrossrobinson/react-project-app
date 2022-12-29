import MartiniImg from "../app/assets/martini.jpeg";

const Background = () => {
  return (
    <div>
      <img
        className="min-h-screen"
        src={MartiniImg}
        alt="Sunset in the mountains"
      />
    </div>
  );
};

export default Background;
