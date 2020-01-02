import 'react-app-polyfill/ie9'; // Support for IE9
import React, { useState, useEffect } from 'react';

import Loader from "./components/Loader";
import SearchBox from "./components/SearchBox";

const App: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [status, setStatus] = useState('');
	// const [recipes, setRecipes] = useState({});

	// Search API when query value changes
	useEffect(() => {
		function mockSearch() {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve()
				}, 4000);
			});
		}

		// Perform search
		if (searchQuery && searchQuery.trim() !== "") {
			setIsLoading(true);
			mockSearch()
				.finally(() => {
					setIsLoading(false);
					setStatus(`You searched for ${searchQuery}`);
				});
		}
	}, [searchQuery]);

	return (
		<>
			{/* <Loader isLoading={isLoading} /> */}
			<SearchBox
				searchFunction={setSearchQuery}
				isLoading={isLoading} 
			/>
			{/* <SearchResults hits={recipes} /> */}
			<p>{status}</p>
		</>
	);
}

export default App;
