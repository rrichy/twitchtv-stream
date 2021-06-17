import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFreeCodeCamp, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ajax } from 'jquery';

import UserList from './component/userlist.jsx';

class App extends Component {
	state = {
		users: [],
	};

	async componentDidMount() {
		const user_ids = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
		let users = {};

		const fetchData = [];

		user_ids.forEach(u => {
			fetchData.push(fetch('https://twitch-proxy.freecodecamp.rocks/twitch-api/users/' + u))
			fetchData.push(fetch('https://twitch-proxy.freecodecamp.rocks/twitch-api/streams/' + u));
		});
		
		const promises = await Promise.all(fetchData);
		const jsonDatas = await Promise.all(promises.map(d => d.json()));

		while(jsonDatas.length) {
			const [ {display_name, bio, name, _id: id, logo, created_at}, { stream } ] = jsonDatas.splice(0, 2);
			
			users[name] = { 
				display_name,
				bio: bio === null ? '' : bio,
				id,
				logo, 
				created_at,
				link: 'https://www.twitch.tv/' + name,
			}

			if(stream) {
				const { game, viewers, channel } = stream;
				const { language, status } = channel;
				
				users[name].language = language;
				users[name].game = game;
				users[name].viewers = viewers;
				users[name].status = status;
				users[name].active = true;
			}
			else users[name].active = false;
		}

		users = Object.values(users);

		this.setState({ users });
		console.log(this.state.users);
	}
	
	render() { 
		return (
			<div id='wrapper'>
				<UserList users={this.state.users}/>
				<div id="footer">
					<p>Created and designed by rrichy</p>
					<a href="https://github.com/rrichy" target="_blank"><FontAwesomeIcon icon={faGithub} className="fa-lg" /></a>
					<a href="https://www.freecodecamp.org/rrichy" target="_blank"><FontAwesomeIcon icon={faFreeCodeCamp} className="fa-lg" /></a>
					<a href="https://codepen.io/rrichy" target="_blank"><FontAwesomeIcon icon={faCodepen} className="fa-lg" /></a>
				</div>
			</div>
		);
	}
}
 
export default App;