import 'react-app-polyfill/ie9'; // Support for IE9
import React, { SyntheticEvent, useState, useEffect, CSSProperties } from 'react';
import './App.css';

const Loader: React.FC<{isLoading: boolean}> = (props) => {
  const loaderStyle: CSSProperties = {
    display: props.isLoading ? "flex" : "none",
    height: "100vh",
    width: "100%",
    position: "fixed",
    top: 0, 
    left: 0,
    zIndex: 9999,
    backgroundColor: "#DDD",
    opacity: 0.7,
    alignItems: "center",
    justifyContent: "center"
  }

  const contentStyle: CSSProperties = {
    fontFamily: "sans-serif",
    fontSize: "20pt"
  }
  
  return (
    <div style={loaderStyle}>
      <div style={contentStyle}>
        Loading..
      </div>
    </div>
  )
}

interface ISearchBoxProps {
  searchFunction: (query: string) => any
}

const SearchBox: React.FC<ISearchBoxProps> = ({searchFunction}) => {
  const inputEl = React.useRef<HTMLInputElement>(null);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (inputEl && inputEl.current && inputEl.current.value.trim() !== "") {
      searchFunction(inputEl.current.value);
      inputEl.current.value = "";
      inputEl.current.focus();
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" ref={inputEl} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

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
      <Loader isLoading={isLoading} />
      <SearchBox searchFunction={setSearchQuery}/>
      <p>{status}</p>
    </>
  );
}

export default App;
