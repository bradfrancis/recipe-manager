import React from "react";
import Loader from "./Loader";
import RecipeCard from "./RecipeCard";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import AutoDisappearingAlert from "./AutoDissappearingAlert";

const SearchResults = ({ recipes, query, isFetching, fetchingDidError, actions }) => {
	const recipesLoaded = recipes && recipes.length > 0;

	return (
		<Container>
			{isFetching && <Loader />}
			{recipesLoaded &&
				<div className="my-5">
					<div className="d-flex flex-row flex-wrap justify-content-between">
						{
							recipes.map(recipe => <RecipeCard data={recipe} key={btoa(recipe.uri)} />)
						}
					</div>

					{fetchingDidError &&
						<AutoDisappearingAlert variant="danger">
							<p>An error occured processing your request. Please wait a moment and then try again.</p>
						</AutoDisappearingAlert>
					}

					<div className="m-4 p-1 d-flex justify-content-center">
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
		</Container>
	);
};

export default SearchResults;