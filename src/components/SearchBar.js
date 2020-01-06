import React, { useState } from "react";
import { Form, Row, Col, Jumbotron, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ isFetching, actions }) => {
	const [input, setInput] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (input !== "") {
			const res = await actions.fetchRecipes(input);
			
			if (!res.error) {
				setInput('');
			}
		}
	};

	return (
		<Jumbotron>
			<h1 className="text-uppercase">Search</h1>
			<p>Use the search bar below to query the Edamam Recipe API</p>
			<Form onSubmit={(e) => handleSubmit(e)}>
				<Form.Group as={Row}>
					<Col sm="6">
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
								<InputGroup.Text className="bg-info text-white">
									<FontAwesomeIcon icon="search" />
								</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control
								type="text"
								placeholder="Search"
								className="mr-sm-2"
								value={input}
								onChange={(e) => setInput(e.target.value)}
								disabled={isFetching}
							/>
						</InputGroup>
					</Col>
				</Form.Group>
			</Form>
		</Jumbotron>
	);
}

export default SearchBar;