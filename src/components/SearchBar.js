import React, { useState } from "react";

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
		<form onSubmit={(e) => handleSubmit(e)}>
			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				disabled={isFetching}
			/>
			<button
				type="submit"
				disabled={isFetching}>
				{didSubmit ? "Loading..." : "Search"}
			</button>
		</form>
	);
}

export default SearchBar;