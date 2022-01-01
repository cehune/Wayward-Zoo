import React from 'react';
import './button.css'

export class Button extends React.Component {
	render() {
		return (
			<button onClick = {this.props.onClick}>
				Learn now!
			</button>
		);
	}
}

//Just a simple button using the prop onClick as seen on App.js