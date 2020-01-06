import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Accordion } from "react-bootstrap";

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

const RecipeCardNutritionItems = ({items}) => {
	const keys = [].concat(Object.keys(items));

	return (
		<>
		{keys.length > 0 &&
			<ul>
				{
					keys.map((key, i) => {
						const data = items[key];
						return <RecipeCardNutritionItem key={i} {...data} />;
					})
				}
			</ul>
		}
		</>
	);
}

const RecipeCardNutritionItem = ({label, quantity, unit}) => {
	quantity = quantity.toFixed(2);

	return (
		<li>{`${label}: ${quantity} ${unit}`.trim()}</li>
	);
}

const RecipeCard = ({data}) => {
	return (
		<div className="my-4 d-inline-flex flex-wrap" style={{width: "45%"}}>
			<div className="imgContainerOuter p-2 w-50">
				<img src={data.image} alt={data.label} title={data.label} className="w-100" />
			</div>
			<div className="highlightsContainerOuter p-1 flex-fill w-50">
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
			</div>
			<div className="detailsContainerOuter flex-grow-1">
				<Accordion>
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="0">Ingredients</Accordion.Toggle>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								{data.ingredientLines && data.ingredientLines.length > 0 &&
									<ul>
										{
											data.ingredientLines.map((val, i) => <li key={i}>{val}</li>)
										}
									</ul>
								}
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="1">Nutritional Information</Accordion.Toggle>
						<Accordion.Collapse eventKey="1">
							<Card.Body>
								<RecipeCardNutritionItems items={data.totalNutrients} />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</div>
		</div>
	);
}

export default RecipeCard;