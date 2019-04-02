import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="inputWrapper">
					<input className="input" autofocus="true" type="number" value="10000000" />
				</div>
			</div>
		);
	}
}

export default App;
