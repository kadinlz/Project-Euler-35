import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { FaInfoCircle } from 'react-icons/fa';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 10,
			circularPrimes: 0,
		};
	}
	isPrime(number) {
		//Special cases & single digits
		if (number === 1) {
			return false;
		} else if ([2, 3, 5, 7].includes(number)) {
			return true;
		}

		var lastDigit = number % 10;
		//If last digit is even, 5, or 0, number is not prime, so return false
		if ([0, 2, 4, 5, 6, 8].includes(lastDigit)) {
			return false;
		}

		for (var i = 2; i <= Math.sqrt(number); i++) {
			if (number % i === 0) {
				return false;
			}
		}
		return true;
	}
	isCircular(prime) {
		//Handle single digits
		if ([2, 3, 5, 7].includes(prime)) {
			return true;
		}

		var number = prime;
		var length = number.toString().length;

		//Rotate the number once for every digit
		for (var i = 0; i < length; i++) {
			var lastDigit = prime % 10;
			//If last digit is even, 5, or 0, number is not prime, so return false
			if ([0, 2, 4, 5, 6, 8].includes(lastDigit)) {
				return false;
			}
			//Rotate number
			var firstDigits = Math.floor(prime / 10);
			number = lastDigit * 10 ** (length - 1) + firstDigits;
			//If number is not prime, end function
			if (!this.isPrime(number)) {
				return false;
			}
		}

		return true;
	}
	handleChange = e => {
		var input = e.target.value;
		var circularPrimes = 0;

		//Handle input of 2
		if (input > 2) {
			circularPrimes += 1;
		}

		//Loop through each odd number below input
		for (var i = 3; i < input; i += 2) {
			if (this.isPrime(i)) {
				if (this.isCircular(i)) {
					circularPrimes += 1;
				}
			}
		}

		//Update result when finished
		this.setState({
			num: input,
			circularPrimes: circularPrimes,
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
						How many circular circularPrimes
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
					<p className="result">{this.state.circularPrimes}</p>
				</div>
			</div>
		);
	}
}

export default App;
