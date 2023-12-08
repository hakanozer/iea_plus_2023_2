import { legacy_createStore as createStore, combineReducers } from "redux";
import { LikesReducer } from "./reducers/LikesReducers";

const combine = combineReducers({
    LikesReducer,
})

export type StateType = ReturnType<typeof combine>

export const store = createStore(combine)