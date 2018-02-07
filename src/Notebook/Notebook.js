import React, { Component } from 'react';
import UpdateNotebookForm from '../NotebookForm/UpdateNotebookForm';
import { Link } from 'react-router-dom';

class Notebook extends Component {

	createLoadingNode() {
		return (
			<div className="container loading">
				<h1>Loading...</h1>
			</div>
		);
	}

	render() {
		const { notebooks, id } = this.props;
		const notebook = notebooks[id];

		const loadingNode = this.createLoadingNode();
		if (!notebook) return loadingNode;

		return (
			<div className="container notebook">
				<ul className="breadcrumbs">
					<li><Link to="/">Notebooks</Link></li>
					<li>{ notebook.title }</li>
				</ul>
				<div className="nb__main">
					<div className="nb__title-block">
						<h1 className="nb__title">
							{ notebook.title }
							<span className="nb__language">{ notebook.language }</span>
						</h1>
					</div>
					<div className="nb__funcs">Total: {"123"} items</div>
				</div>
			</div>
		)
	}
}

export default Notebook;
