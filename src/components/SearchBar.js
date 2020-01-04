import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Navbar, Form, FormControl, Container, Row, Col } from "react-bootstrap";

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
		<Container>
			<Navbar variant="dark" bg="light">
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
			</Navbar>
		</Container>
	);
}

export default SearchBar;