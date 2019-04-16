import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { FaInfoCircle } from 'react-icons/fa';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 10,
			primes: 0,
		};
	}
	handleChange = e => {
		var input = e.target.value;
		for (var i = 2; i < input; i += 2) {}
		this.setState({
			num: input,
			primes: input * 2,
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
					<p className="result">{this.state.primes}</p>
				</div>
			</div>
		);
	}
}

export default App;
