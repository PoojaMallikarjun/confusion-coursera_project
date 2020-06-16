import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  leaders: LEADERS,
  promotions: PROMOTIONS,
};
//Reducer function is a part of the redux store that takes the current state and action as parameter and returns the next state
//when the reducer is first called by my store, my store would have no state, so the state will be uninitialized.Hence we specify
//a default value of initiaState
export const Reducer = (state = initialState, action) => {
  return state;
};
