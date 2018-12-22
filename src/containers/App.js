import React, {Component} from 'react';
import {connect} from 'react-redux';

import CardList from '../components/cardList';
import Scroll from '../components/scroll';
import SearchBox from '../components/searchBox';
import Header from '../components/header';

import ErrorBoundary from '../components/ErrorBoundary';
import {setSearchField,requestRobots} from '../actions';

const mapStateToProps = (state) =>{
	return {
		searchField:state.searchRobots.searchField,
		robots:state.requestRobots.robots,
		isPending:state.requestRobots.isPending,
		error:state.requestRobots.error
	};
}

const mapDispatchToProps = (dispatch)=>{

	return {

		onSearchChange: (event)=>{
		
			return dispatch(setSearchField(event.target.value));
		},

		onRequestRobots:()=>{
			return dispatch(requestRobots());
		}
	};
}

class App extends Component {

	render(){

		const {searchField,onSearchChange,robots,isPending} = this.props;

		console.log(this.props);

		const filteredRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

			return(
		
			<div className='tc'>

				<Header/>
				<SearchBox onSearchChange = {onSearchChange}/>
				<Scroll>
					{ isPending ? <h1 className='f1 tc'>Loading...</h1> :
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
					}
				</Scroll>

			</div>
			);
	
	}

	componentDidMount(){

		this.props.onRequestRobots();
	
	}
	
}

export default connect(mapStateToProps,mapDispatchToProps)(App);