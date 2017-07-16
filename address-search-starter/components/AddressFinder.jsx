import React, { Component } from 'react'
import axios from 'axios';

class AddressFinder extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			term: '',
			results: []
		};
		this.handleClick = this.handleClick.bind(this)
		this.search = this.search.bind(this)
	}

	search(query) {
		var self = this
		axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${query}`)
			.then(function(response) {
				self.setState({
					results: response.data.results
				})
			})
			.catch(function(error) {
				alert('Address Invalid')
			});
	}

	handleClick(e) {
		e.preventDefault();
		this.search(this.state.term)
	}

	render() {
		return (
			<div>
				<input
					value={this.state.term}
					onChange={event => this.setState({ term: event.target.value })} />

				<button onClick={this.handleClick}>SEARCH</button>
				{this.state.results.map(result => <div key={result.formatted_address}>{result.formatted_address}</div>)}
			</div>
		);
	}
}



export default AddressFinder;



