import { WORLDCARD } from "../data/WORLDPAGE";

export const selectAllWorldCard = () => {
  return WORLDCARD;
};
export const selectWorldById = (id) => {
  return WORLDCARD.find((card) => card.id === parseInt(id));
};
