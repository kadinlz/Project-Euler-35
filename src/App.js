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
			var firstDigits = Math.floor(prime / 10);
			number = lastDigit * 10 ** (length - 1) + firstDigits;
			if (!this.isPrime(number)) {
				return false;
			}
		}

		return true;
	}
	handleChange = e => {
		var input = e.target.value;
		var primes = 0;
		//Loop through each odd number below input
		if (input > 2) {
			primes += 1;
		}
		for (var i = 3; i < input; i += 2) {
			if (this.isPrime(i)) {
				if (this.isCircular(i)) {
					primes += 1;
				}
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
