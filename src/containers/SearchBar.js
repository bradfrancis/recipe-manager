import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as SearchActions from "../actions";
import SearchBar from "../components/SearchBar";

const mapStateToProps = state => ({
	isFetching: state.recipesReducer.isFetching
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(SearchActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar);