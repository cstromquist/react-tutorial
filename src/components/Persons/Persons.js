import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
	constructor(props) {
		super(props);
		console.log('[Persons.js] Inside Constructor', props);
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
		console.log('[Persons.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[Persons.js] Inside componentDidMount()');
	}
	
	UNSAFE_componentWillReceiveProps(nextProps) {
		console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
		return nextProps.persons !== this.props.persons;
	}

	UNSAFE_componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
	}

	componentDidUpdate() {
		console.log('[UPDATE Persons.js] Inside componentDidUpdate');
	}

	render() {
		console.log('[Persons.js] Inside Render');
		return this.props.persons.map( ( person, index ) => {
			return <Person
				click={() => this.props.clicked( index )}
				name={person.name} 
				age={person.age}
				key={person.id}
				changed={(event) => this.props.changed( event, person.id )} />;
		});
	}
}

export default Persons;