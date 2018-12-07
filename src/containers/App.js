import React, {Component} from 'react';
import CardList from '../components/cardList';
import Scroll from '../components/scroll';
import SearchBox from '../components/searchBox';

class App extends Component {

	constructor(){
		super();

		this.state ={
			robots:[],
			searchField:''
		}

		this.onSearchChange = this.onSearchChange.bind(this);
	}

	onSearchChange(event) {

		//Alternatively, use onSearchChange = (event)=>{}
		//By doing this you don't need to bind 'this' to onSearchChange in the constructor()
		//Because arrow function doesn not generate its own scope, it will instead use
		//its parent scope as its scope (?)
		//Whereas a regualr function(event) has its own scope hence the 'this' in
		//this.setStae will refer to to function(event) which is undefined, there's nothing in the function

		//Have to do this when changing state in React
		//Can't do this.state.searchField = ..
		this.setState({searchField:event.target.value});	
	}

	render(){

		const {robots,searchField} = this.state;
		const filteredRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

			return !robots.length?

			<h1 className='f1 tc'>Loading...</h1>:

			<div className='tc'>

				<h1 className='f1'>RoboFriends</h1>
				<SearchBox onSearchChange = {this.onSearchChange} searchField = {this.searchField}/>
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>

			</div>
			
			;
	
	}

	componentDidMount(){

		fetch('https://jsonplaceholder.typicode.com/users')
		
		.then(response=>{

			return response.json();

		}).then(users=>{
			this.setState({robots:users});
		});
	
	}
	
}

export default App;