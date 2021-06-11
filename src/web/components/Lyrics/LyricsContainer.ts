import { connect } from "react-redux";
import { Dispatch, compose } from "redux";

import { setLyrics } from "../../../core/actionCreators/lyricsActionCreators";
import * as actionTypes from "../../../core/actionTypes/lyricsActionTypes";
import { getLyrics } from "../../../core/actionCreators/lyricsActionCreators";
import { AppState } from "../../../core/reducers/rootReducer";
import SearchComponent from "./LyricsComponent";

const mapStateToProps = (state: AppState) => {
	return {
		lyrics: state.lyrics.lyrics,
		isLoading: state.isLoading[actionTypes.GET_LYRICS],
		error: state.error[actionTypes.GET_LYRICS]
	};
};

const mapDispatchToProps = (dispatch: Dispatch<actionTypes.LyricsAction>) => ({
	onSearch: (artist: string, song: string) => {
		dispatch(getLyrics(artist, song));
	},
	onClear: () => {
		dispatch(setLyrics(""));
	}
});

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps
)

export default compose(
  withConnect,
)(SearchComponent);
