import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';

// Twój kod
// UWAGA! W kursie react z youtube, gośc używa funckji reactClass, ale jest ona zdeprecjonowana, więc lepiej jej chyba nie używać
// Jeśli już jednak chcesz jej użyć, to najpeirw zrób require, a póżniej zapisz funckję jako "createReactClass"
var createReactClass = require('create-react-class');

// var Movie = createReactClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<h1>{this.props.title}</h1>
// 				<h3>{this.props.genre}</h3>
// 			</div>
// 		)
// 	}
// });

var Comment = createReactClass({
	// Pamiętaj, że jak cchesz użyc STATE, to musisz najpeirw meić funckję getInitnialState, 
	// czyli poniekąd stworzyć defultowy state

	// Pamietaj, ze getIntialState, jest funkcją wbudwoaną i powinna być użyta jak uzwyamy state!
	getInitialState: function() {
		return {editing: false}
	},
	edit: function() {
		this.setState({editing: true});
		// console.log('editing');
	},
	save: function() {
		this.setState({editing: false});
	},
	remove: function() {
		console.log('removing');
	},
	renderNormal: function() {
		return (
			// w React używamy clasName, by zapisać klase w html, ponieważ słowo 'class', jest już zajęte w JS
			// za pomoca this.props.children, dostaniemy sie do dzieci elementu Comment
			<div className="comments">
				<p>{this.props.children}</p>
				<button onClick={this.edit}>Edytuj</button>
				<button onClick={this.remove}>Usuń</button>
			</div>
		)
	},
	renderForm: function() {
		return (
			<div className="comments">
				<textarea defaultValue={this.props.children}></textarea>
				<button onClick={this.save}>Zapisz</button>
			</div>
		)
	}, 
	render: function() {
		if (this.state.editing) {
			return this.renderForm();
		} else {
			return this.renderNormal();
		}
	}
});


ReactDOM.render(
	<div>
		<Comment>Jeden</Comment>
		<Comment>Dwa</Comment>
		<Comment>Trzy</Comment>
	</div>, document.getElementById('container'));

// Notaki:
// Różnica pomiędzy State i Props:
// Props - ustawiasz raz i zostawiasz na stałe
// State - możesz zmieniać

// var CheckBox = createReactClass({

// 	// funckja getInitialState, jest wbudowana w React 
// 	getInitialState: function() {
// 		// zwraca obiekt ze stanami, mozesz do tego obiektu wjebać wiele wartości
// 		return {checked: true}
// 	},

// 	handleChecked: function() {
// 		// ustaiwmy STATE za pomocą setState
// 		this.setState({
// 			checked: !this.state.checked
// 		});
// 	},

// 	render: function() {
// 		var msg;

// 		if (this.state.checked) {
// 			msg = 'Checkobx is checked';
// 		} else {
// 			msg = 'Checkobx is not checked';
// 		}
// 		// defaultChecked, to też wbudowana wartość (domyślna wartość checkboxa)
// 		// onChange to event, który sie wykonuje jesli cos się zmienia
// 		// tutaj widzisz siłe reacta, że kiedy STATE się zmeinia, to sam odświeża daną część aplikacji
// 		return (
// 			<div>
// 				<input type='checkbox' onChange={this.handleChecked} defaultChecked={this.state.checked} />
// 				<p>{msg}</p>
// 			</div>
// 		);
// 	}
// });

// ReactDOM.render(
// 	<CheckBox></CheckBox>
// , document.getElementById('container'));