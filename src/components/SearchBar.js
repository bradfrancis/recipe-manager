import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, Row, Col, Jumbotron } from "react-bootstrap";

const SearchBar = ({ isFetching, actions }) => {
	const [input, setInput] = useState('');
	const [didSubmit, setDidSubmit] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (input !== "") {
			setDidSubmit(true);
			const res = await actions.fetchRecipes(input);

			if (res.payload && res.payload !== typeof(Error)) {
				setInput('');
			}

			setDidSubmit(false);
		}
	};

	return (
		<Jumbotron>
			<h1>Search</h1>
			<p>Use the search bar below to query the Edamam Recipe API</p>
			<Form inline onSubmit={(e) => handleSubmit(e)}>
				<Form.Group as={Row}>
					<Col sm="12">
						<Form.Control
							type="text"
							placeholder="Search"
							className="mr-sm-2"
							onChange={(e) => setInput(e.target.value)}
							disabled={isFetching}
						/>
						<Button
							type="submit"
							variant="outline-info"
							disabled={isFetching}>
							{didSubmit ? "Loading..." : "Search"}
						</Button>
					</Col>
				</Form.Group>
			</Form>
		</Jumbotron>
	);
}

export default SearchBar;