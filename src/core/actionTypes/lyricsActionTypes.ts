export const SET_LYRICS = "SET_LYRICS";
export interface SetLyricsAction {
  type: typeof SET_LYRICS;
  lyrics: string;
}

export const GET_LYRICS = "GET_LYRICS";
export interface GetLyricsAction {
  type: typeof GET_LYRICS;
  artist: string;
  song: string;
}

export const GET_LYRICS_REQUEST = "GET_LYRICS_REQUEST";
export interface GetLyricsRequestAction {
  type: typeof GET_LYRICS_REQUEST;
}

export const GET_LYRICS_SUCCESS = "GET_LYRICS_SUCCESS";
export interface GetLyricsSuccessAction {
  type: typeof GET_LYRICS_SUCCESS;
  lyrics: string;
}

export const GET_LYRICS_FAILURE = "GET_LYRICS_FAILURE";
export interface GetLyricsFailureAction {
  type: typeof GET_LYRICS_FAILURE;
  error: Error | string;
}

export type LyricsAction =
  | SetLyricsAction
  | GetLyricsAction
  | GetLyricsRequestAction
  | GetLyricsSuccessAction
  | GetLyricsFailureAction;
