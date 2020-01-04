import React from "react";
import Loader from "./Loader";
import RecipeCard from "./RecipeCard";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Alert } from "react-bootstrap";

const SearchResults = ({ recipes, query, isFetching, fetchingDidError, actions }) => {
	const recipesLoaded = recipes && recipes.length > 0;

	return (
		<Container>
			{isFetching && <Loader />}
			{recipesLoaded &&
				<div className="my-5">
					<CardColumns>
						{
							recipes.map(recipe => <RecipeCard data={recipe} key={btoa(recipe.uri)} />)
						}
					</CardColumns>
					<div className="mt-sm-10 d-flex justify-content-center">
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
			{fetchingDidError &&
				<Alert variant="danger" dismissible>
					<p>Uh oh! An error occurred while processing your request :/</p>
				</Alert>
			}
		</Container>
	);
};

export default SearchResults;