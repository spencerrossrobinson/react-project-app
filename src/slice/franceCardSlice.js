import { FRANCECARD } from "../data/FRANCEPAGE";

export const selectAllFranceCard = () => {
  return FRANCECARD;
};
export const selectFranceById = (id) => {
  return FRANCECARD.find((card) => card.id === parseInt(id));
};
