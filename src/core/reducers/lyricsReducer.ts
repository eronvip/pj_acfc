import * as actions from "../actionTypes/lyricsActionTypes";
import { LyricsModel } from "../model/LyricsModel";

const initialState: LyricsModel = {
  lyrics: ""
};

export default function lyricsReducer(
  state: LyricsModel = initialState,
  action: actions.LyricsAction
): LyricsModel {
  switch (action.type) {
    case actions.SET_LYRICS:
    case actions.GET_LYRICS_SUCCESS:
      return {
        lyrics: action.lyrics
      };
    default:
      return state;
  }
}
