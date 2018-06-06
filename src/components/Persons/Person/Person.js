import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
	constructor(props) {
		super(props);
		console.log('[Person.js] Inside Constructor', props);
		this.state = {
			persons: [
				{ id: 'asdf1', name: 'Max', age: 29},
				{ id: 'asdf3', name: 'Bill', age: 30},
				{ id: 'fadf4', name: 'Bob', age: 25}
			],
			otherState: 'some other value',
			showPersons: false
		};
	}

	UNSAFE_componentWillMount() {
		console.log('[Person.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[Person.js] Inside componentDidMount()');
	}
	render() {
		console.log('[Person.js] Inside render()');
		return (
			<WithClass classes={classes.Person}>
				<p onClick={this.props.click}>I&rsquo;m {this.props.name} and I am {this.props.age} years old!</p>
				<p>{this.props.children}</p>
				<input type="text" onChange={this.props.changed} value={this.props.name} />
			</WithClass>
		);
	}
}

export default Person;