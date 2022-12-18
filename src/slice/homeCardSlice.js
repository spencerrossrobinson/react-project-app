import { HOMECARD } from "../data/HOMEPAGE";

export const selectCardById = (id) => {
  return HOMECARD.find((card) => card.id === parseInt(id));
};

export const selectAllCard = () => {
  return HOMECARD;
};
