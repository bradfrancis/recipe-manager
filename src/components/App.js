import React from 'react';
import SearchBar from '../containers/SearchBar';
import SearchResults from "../containers/SearchResults";
import Container from 'react-bootstrap/Container';

const App = () => (
  <Container>
    <SearchBar />
    <SearchResults />
  </Container>
);

export default App;
