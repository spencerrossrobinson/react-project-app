import WorldList from "../components/WorldList";
import { useParams } from "react-router-dom";
import { selectWorldById } from "../slice/worldCardSlice";

const DirectoryPage = () => {
  const { worldId } = useParams();
  const cards = selectWorldById(worldId);
  return <WorldList cards={cards} worldId={worldId} />;
};

export default DirectoryPage;
