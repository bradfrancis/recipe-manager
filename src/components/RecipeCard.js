import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "react-bootstrap";

const RecipeCardHightlightIcon = ({icon, value, suffix}) => {
	const flooredVal = Math.floor(value);
	const label = isNaN(flooredVal) ? "N/A" : `${flooredVal} ${suffix || ""}`.trimRight();

	return (
		<div className="text-center">
			<FontAwesomeIcon icon={icon}/>
			<span className="ml-2">{label}</span>
		</div>
	);
}
const RecipeCardHighlights = ({servings, weight, calories}) => (
	<div className="d-flex justify-content-around mb-1">
		<RecipeCardHightlightIcon icon="utensils" value={servings} />
		<RecipeCardHightlightIcon icon="weight" value={weight} suffix="g"/>
		<RecipeCardHightlightIcon icon="battery-three-quarters" value={calories} suffix="kcal" />
	</div>
);

const RecipeCardLabelPills = ({healthLabels, dietLabels}) => {
	const labels = [].concat(healthLabels, dietLabels);

	return (
		<>
		{labels.length > 0 &&
			<div className="p-2">
			{
				labels.map((label, i) => <Badge pill variant="info" key={i}>{label}</Badge>)
			}
			</div>
		}
		</>
	);
}

const RecipeCard = ({data}) => {
	return (
		<div className="mb-3">
			<Card style={{width: "18rem"}} border="secondary">
				<Card.Img variant="top" src={data.image} />
				<h5 className="text-center text-capitalize mt-2 p-2">{data.label}</h5>
				<RecipeCardHighlights
					servings={data.yield}
					weight={data.totalWeight}
					calories={data.calories}
				/>
				<RecipeCardLabelPills
					healthLabels={data.healthLabels}
					dietLabels={data.dietLabels}
				/>
				<Card.Footer>
					<small>
						<span>Source:&nbsp;</span>
						<a
							href={data.url}
							target="_blank"
							rel="noopener noreferrer">
							{data.source}
						</a>
					</small>
				</Card.Footer>
			</Card>
		</div>
	);
}

export default RecipeCard;