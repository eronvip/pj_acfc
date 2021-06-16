import { connect } from "react-redux";
import { Dispatch, compose } from "redux";

import { setLyrics } from "../../../core/actionCreators/lyricsActionCreators";
import * as actionTypes from "../../../core/actionTypes/lyricsActionTypes";
import { getLyrics } from "../../../core/actionCreators/lyricsActionCreators";
import { AppState } from "../../../core/reducers/rootReducer";
import HeaderComponent from "./component";

// const mapStateToProps = (state: AppState) => {
// 	return {
// 	};
// };

// const mapDispatchToProps = (dispatch: Dispatch<actionTypes.LyricsAction>) => ({
// });

// const withConnect = connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )

export default compose()(HeaderComponent);
