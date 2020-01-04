import React from "react";
import Loader from "./Loader";
import RecipeCard from "./RecipeCard";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

const SearchResults = ({ recipes, isFetching, query, actions }) => {
	const recipesLoaded = recipes && recipes.length > 0;

	const loadMoreStyles = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	};

	return (
		<>
			{isFetching && <Loader />}
			{recipesLoaded &&
				<div>
					<CardColumns>
						{
							recipes.map(recipe => <RecipeCard data={recipe} key={btoa(recipe.uri)} />)
						}
					</CardColumns>
					<div className="mt-sm-10" style={loadMoreStyles}>
						<Button
							variant="info"
							onClick={() => actions.fetchRecipes(query, recipes.length, true)}
							disabled={isFetching}
							>
							Load More
						</Button>
					</div>
				</div>
			}
		</>
	);
};

export default SearchResults;