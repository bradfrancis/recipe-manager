import React from "react";

const Loader = () => {
	const loaderStyles = {
		minHeight: "100vh",
		minWidth: "100%",
		opacity: 0.7,
		fontSize: "2rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 9999,
		position: "absolute",
		backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"
	};

	return (
		<div style={loaderStyles}>
			<span>Loading...</span>
		</div>
	);
}

const SearchResults = ({ recipes, isFetching, query, actions }) => {
	const recipesLoaded = recipes && recipes.length > 0;

	return (
		<>
			{isFetching && <Loader />}
			{recipesLoaded &&
				<div>
					<ul>
						{recipes.map(recipe => <li>{recipe.label}</li>)}
					</ul>
					<button
						onClick={() => actions.fetchRecipes(query, recipes.length, true)}
						disabled={isFetching}
						>
						Load More
					</button>
				</div>
			}
		</>
	);
};

export default SearchResults;