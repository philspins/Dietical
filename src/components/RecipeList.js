// src/components/RecipeList.js
/*eslint no-console:0 */

import React from "react";
import {LinkContainer} from "react-router-bootstrap";
import {ListGroup,
				ListGroupItem,
        Media,
				Thumbnail,
				Image,
				Grid,
				Row,
				Col} from "react-bootstrap";
import {isEqual} from "underscore";

import RecipeListStore from "../stores/RecipeListStore";
import RecipeListActions from "../actions/RecipeListActions";

class RecipeList extends React.Component {
	constructor(props) {
		super(props);
		this.state = RecipeListStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		RecipeListStore.listen(this.onChange);
		RecipeListActions.getRecipes();
	}

	componentWillUnmount() {
		RecipeListStore.unlisten(this.onChange);
	}

	componentDidUpdate(prevProps) {
		//RecipeListActions.getRecipes();
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		if(!this.state.recipes.length){
			return (
				<div className="spinner">
					<Image src="/images/spinner.gif"/>
				</div>
			);
		}

		let recipeList = this.state.recipes.map((recipe, index) => {
			return (
				<LinkContainer to={"/recipes/" + recipe.id}>
					<ListGroupItem className="col-xs-6">
						<Media>
							<Thumbnail src={recipe.ImageURL || "/images/placeholder.png"} className="pull-left thumb-lg"/>
							<Media.Body>
								<Media.Heading>{recipe.Name}</Media.Heading>
							</Media.Body>
						</Media>
					</ListGroupItem>
				</LinkContainer>
			);
		});

		return (
			<Grid className="">
        <ListGroup className="row animated fadeIn">
					{recipeList}
        </ListGroup>
      </Grid>
		);
	}
}

export default RecipeList;
