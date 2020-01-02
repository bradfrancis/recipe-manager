import React, { SyntheticEvent, useState } from "react";

interface ISearchBoxProps {
	searchFunction: (query: string) => any,
	isLoading: boolean
}

const SearchBox: React.FC<ISearchBoxProps> = (props) => {
    const [input, setInput] = useState('');
    
	const submitSearchForm = (e: SyntheticEvent) => {
        const query = input.trim();

        e.preventDefault();
        
        if (query !== "") {
            props.searchFunction(query);
            setInput("");
        }
    };

	return (
        <>
            <form onSubmit={submitSearchForm}>
                <input
                    type="input"
                    placeholder="Enter search query..."
                    value={input}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                />
                <button
                    disabled={props.isLoading}
                    type="submit">
                    <span>
                        {props.isLoading ? "Loading..." : "Search"}
                    </span>
                </button>
            </form>
        </>
	);
}

export default SearchBox;