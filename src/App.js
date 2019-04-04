import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { FaInfoCircle } from 'react-icons/fa';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 1000000000,
		};
	}
	handleChange = e => {
		this.setState({
			num: e.target.value,
		});
	};
	render() {
		return (
			<div className="App">
				<div className="inputWrapper">
					<p className="header">
						Project Euler Problem <span>35</span>
					</p>
					<p className="description">
						How many circular primes
						<a className="info" target=" " href="https://projecteuler.net/problem=35">
							<FaInfoCircle />
						</a>
						are below:
					</p>
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
