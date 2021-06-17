import React, { Component } from 'react';
import defaultlogo from './user.svg';

class User extends Component {
	render() {
		const { display_name,
			bio,
			id,
			logo,
			created_at,
			link,
			language,
			game,
			viewers,
			status,
			active
		} = this.props.user;
		return (
			<div className="user">
				{/* <img src={defaultlogo} alt="" className="user-icon" /> */}
				<img src={logo} alt="" className="user-icon" onError={e => e.target.src = defaultlogo} />
				<p className="user-description">
					<h3>{display_name}</h3>
					<h5 className="game-description">{active ? game + ': ' + status : 'Offline'}</h5>
					{viewers && <h5>{'Viewers: ' + viewers}</h5>}
				</p>
			</div>
		);
	}
}
 
class UserList extends Component {
	state = {  }
	render() { 
		return ( 
			<div className="user-list">
				{this.props.users.map(u => <User user={u} />)}
				{/* <User /> */}
			</div>
		);
	}
}
 
export default UserList;