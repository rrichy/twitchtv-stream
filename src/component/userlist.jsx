import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import defaultlogo from './user.svg';

class User extends Component {
	state = {
		id: this.props.user.id,
		name: this.props.user.display_name,
		bio: this.props.user.bio,
		created_at: this.props.user.created_at,
		language: this.props.user.language,
	}

	componentDidMount() {
		const id = this.props.user.id;
		const name = document.querySelector("#name-" + id);
		const description = document.querySelector("#description-" + id);

		if(name.scrollWidth !== name.offsetWidth) name.className = name.className + ' overflow-description';
		if(description.scrollWidth !== description.offsetWidth) description.className = description.className + ' overflow-description';
	}

	handleHover = (e) => {
		const { display_name, created_at, bio } = this.props.user;
		const tooltip = document.querySelector('#tooltip');
		
		tooltip.style.opacity = 1;
		tooltip.style.top = e.target.offsetTop + 'px';
		tooltip.innerHTML = `
			<h3>${display_name}</h3>
			<p>Since ${created_at}</p>
			<p>${bio}</p>
		`
	}

	handleHoverOut = () => {
		const tooltip = document.querySelector('#tooltip');
		
		tooltip.style.opacity = 0;
		tooltip.innerHTML = "";
	}

	render() {
		const { display_name,
			logo,
			link,
			game,
			viewers,
			status,
			active,
			id
		} = this.props.user;
		
		return (
			<div className="user" onMouseEnter={this.handleHover} onMouseLeave={this.handleHoverOut}>
				<a href={link} target="_blank">
					<img src={logo} className={"user-icon" + (active ? " active" : "")} onError={(e) => e.target.src = defaultlogo} />
					<div className="user-description">
						<h4 id={"name-" + id}>{display_name}</h4>
						<p id={"description-" + id} className="game-description">{active ? game + ': ' + status : 'Offline'}</p>
						{viewers && <p>{'Viewers: ' + viewers}</p>}
					</div>
				</a>
			</div>
		);
	}
}
 
class UserList extends Component {
	state = {
		showOn: true,
		showOff: true,
	}
	
	toggleOnlineUsers = () => {
		if(this.state.showOn) {
			document.querySelector('#on-arrow').style.transform = "rotate(-90deg)";
			document.querySelector('#on-list').style.maxHeight = "0px";
		}
		else {
			document.querySelector('#on-arrow').style.transform = "";
			document.querySelector('#on-list').style.maxHeight = this.props.onHeight + "px";
		}
		this.setState({ showOn: !this.state.showOn });
	}

	toggleOfflineUsers = () => {
		if(this.state.showOff) {
			document.querySelector('#off-arrow').style.transform = "rotate(-90deg)";
			document.querySelector('#off-list').style.maxHeight = "0px";
		}
		else {
			document.querySelector('#off-arrow').style.transform = "";
			document.querySelector('#off-list').style.maxHeight = this.props.offHeight + "px";
		}
		this.setState({ showOff: !this.state.showOff });
	}

	render() {
		const onlineUsers = this.props.users.filter(u => u.active);
		const offlineUsers = this.props.users.filter(u => !u.active);

		return (
			<div className="user-list">
				<div className="online">
					<h4 className="status" onClick={this.toggleOnlineUsers}>
						<FontAwesomeIcon id="on-arrow" icon={faAngleDown} />
						ONLINE
					</h4>
					<div id="on-list" className="list">
						{onlineUsers.map(u => <User key={u.id} user={u} />)}
					</div>
				</div>
				<div className="offline">
					<h4 className="status" onClick={this.toggleOfflineUsers}>
						<FontAwesomeIcon id="off-arrow" icon={faAngleDown} />
						OFFLINE
					</h4>
					<div id="off-list" className="list">
						{offlineUsers.map(u => <User key={u.id} user={u} />)}
					</div>
				</div>
				<div id="tooltip"></div>
			</div>
		);
	}
}
 
export default UserList;