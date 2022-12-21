import HomeList from "../components/HomeList";
import { useParams } from "react-router-dom";
import { selectHomeById } from "../slice/homeCardSlice";

const HomePage = () => {
  const { homeId } = useParams();
  const cards = selectHomeById(homeId);
  return <HomeList cards={cards} homeId={homeId} />;
};

export default HomePage;
