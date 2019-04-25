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
	isCircular() {}
	handleChange = e => {
		var input = e.target.value;
		var primes = 0;
		//Loop through each odd number below input
		if (input > 2) {
			primes += 1;
		}
		for (var i = 3; i < input; i += 2) {
			var root = Math.sqrt(i);
			var prime = true;
			//Loop through each number below root
			for (var j = 2; j <= root; j++) {
				if (i % j === 0) {
					prime = false;
					break;
				}
			}
			if (prime === true) {
				primes += 1;
			}
		}
		this.setState({
			num: input,
			primes: primes,
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
