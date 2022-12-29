import { RANDOMCARD } from "../data/RANDOMPAGE";

export const selectRandomCard = () => {
  return RANDOMCARD[Math.floor(RANDOMCARD.length * Math.random())];
};
export const selectAllCard = () => {
  return RANDOMCARD;
};

export const selectCardById = (id) => {
  return RANDOMCARD.find((card) => card.id === parseInt(id));
};
