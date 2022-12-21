import { HOMECARD } from "../data/HOMEPAGE";

export const selectHomeById = (id) => {
  return HOMECARD.find((card) => card.id === parseInt(id));
};

export const selectAllCard = () => {
  return HOMECARD;
};
