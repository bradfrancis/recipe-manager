import { connect } from "react-redux";
import SearchResults from "../components/SearchResults";
import * as SearchActions from "../actions";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
	return { 
		recipes: state.recipesReducer.recipes,
		query: state.recipesReducer.query, 
		isFetching: state.recipesReducer.isFetching, 
		fetchingDidError: state.recipesReducer.fetchingDidError
	};
};

const mapPropsToDispatch = dispatch => ({
	actions: bindActionCreators(SearchActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapPropsToDispatch
)(SearchResults);