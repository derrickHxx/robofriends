import React, {PureComponent} from 'react';

class Header extends PureComponent{

	//Per React offical docs, it's better to use PureComponent as
	//you can when you need to reduce unnecessary render insetaed of
	//shouldComponentUpdate() for Component.
	//PureComponent implements its own shallow comparision for
	//props and state, shouldComponentUpdate() should only be used for
	//performance optimization.
	render(){
		console.log("Header");
		return (<h1 className='f1'>RoboFriends</h1>);
	}
}

export default Header;