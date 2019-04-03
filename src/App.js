import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 100,
		};
	}
	render() {
		return (
			<div className="App">
				<div className="inputWrapper">
					<p className="header">Project Euler Problem 35</p>
					<p className="description">How many circular primes are below:</p>
					<input
						className="input"
						autofocus="true"
						type="number"
						value={this.state.num}
						onChange={this.handleChange}
					/>
				</div>
			</div>
		);
	}
}

export default App;
