import { connect } from "react-redux";
import SearchResults from "../components/SearchResults";
import * as SearchActions from "../actions";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
	const reducerState = state.recipesReducer;

	return {
		isFetching: reducerState.isFetching,
		recipes: reducerState.recipes,
		query: reducerState
	}
};

const mapPropsToDispatch = dispatch => ({
	actions: bindActionCreators(SearchActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapPropsToDispatch
)(SearchResults);