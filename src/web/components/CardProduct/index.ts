import { connect } from "react-redux";
import { Dispatch, compose } from "redux";

import { setLyrics } from "../../../core/actionCreators/lyricsActionCreators";
import * as actionTypes from "../../../core/actionTypes/lyricsActionTypes";
import { getLyrics } from "../../../core/actionCreators/lyricsActionCreators";
import { AppState } from "../../../core/reducers/rootReducer";
import CardProductComponent from "./component";

const mapStateToProps = (state: any, ownProps: any) => {
	return {
    data: ownProps.data.item,
    onClick: ownProps.onClick
	};
};

// const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => ({
//   onClick: 
// });

const withConnect = connect(
	mapStateToProps,
  null
	// mapDispatchToProps
)

export default compose(withConnect)(CardProductComponent);
