import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const RecipeCard = ({data}) => {
	return (
		<Card bg="light" border="secondary" style={{minWidth: "18rem"}}>
			<Card.Header as="h4">{data.label}</Card.Header>
			<div className="m-sm-4 p-3 d-flex justify-content-center">
				<img src={data.image} alt={data.label} className="rounded-circle"/>
			</div>
			<Card.Body>
				{
					data.ingredientLines && data.ingredientLines.length > 0 &&
					<ListGroup variant="flush">
						{
							data.ingredientLines.map(ingredient => <ListGroup.Item variant="info">{ingredient}</ListGroup.Item>)
						}
					</ListGroup>
				}
			</Card.Body>
			<Card.Footer>
				<small className="text-muted">{data.source} (<a href={data.url}>{data.url}</a>)</small>
			</Card.Footer>
		</Card>
	)	
}

export default RecipeCard;