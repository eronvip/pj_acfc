import { combineReducers } from "redux";
import lyricsReducer from "./lyricsReducer";
import isLoadingReducer from "./isLoadingReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  lyrics: lyricsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
