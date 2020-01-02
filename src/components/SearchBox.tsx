import React, { SyntheticEvent, useState, CSSProperties } from "react";
import { Form, Col, Button, Spinner } from "react-bootstrap";

interface ISearchBoxProps {
	searchFunction: (query: string) => any,
	isLoading: boolean
}

const SearchBox: React.FC<ISearchBoxProps> = (props) => {
	const [input, setInput] = useState('');

    const spinnerStyles: CSSProperties = {
        display: props.isLoading ? "inherit" : "none",
        marginRight: "8px"
    };

    const buttonStyles: CSSProperties = {
        verticalAlign: "text-top"
    };

	const onSubmit = (e: SyntheticEvent) => {
        const query = input.trim();

        e.preventDefault();
        
        if (query !== "") {
            props.searchFunction(query);
            setInput("");
        }
    };

	return (
        <Form onSubmit={onSubmit}>
            <Form.Row>
                <Col>
                    <Form.Control
                        placeholder="Search"
                        value={input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                    />
                </Col>
                <Col>
                    <Button
                        variant="primary"
                        disabled={props.isLoading}
                        type="submit"
                    >
                        <Spinner
                            style={spinnerStyles}
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        <span style={buttonStyles}>
                            {props.isLoading ? "Loading..." : "Search"}
                        </span>
                    </Button>
                </Col>
            </Form.Row>
        </Form>
	);
}

export default SearchBox;