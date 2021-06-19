import React, { Component } from "react";

import Footer from "./component/Footer";
import UserList from "./component/Userlist";

class App extends Component {
  state = {
    users: [],
    test: "",
    onHeight: 0,
    offHeight: 0,
  };

  async componentDidMount() {
    const user_ids = [
      "ESL_SC2",
      "OgamingSC2",
      "cretetion",
      "freecodecamp",
      "storbeck",
      "habathcx",
      "RobotCaleb",
      "noobs2ninjas",
    ];
    let users = {};

    const fetchData = [];

    user_ids.forEach((u) => {
      fetchData.push(
        fetch("https://twitch-proxy.freecodecamp.rocks/twitch-api/users/" + u)
      );
      fetchData.push(
        fetch("https://twitch-proxy.freecodecamp.rocks/twitch-api/streams/" + u)
      );
    });

    const promises = await Promise.all(fetchData);
    const jsonDatas = await Promise.all(promises.map((d) => d.json()));

    while (jsonDatas.length) {
      const [
        { display_name, bio, name, _id: id, logo, created_at },
        { stream },
      ] = jsonDatas.splice(0, 2);

      users[name] = {
        display_name,
        bio: bio === null ? "" : bio,
        logo,
        id,
        created_at: new Date(created_at).toLocaleDateString(),
        link: "https://www.twitch.tv/" + name,
      };

      if (stream) {
        const { game, viewers, channel } = stream;
        const { language, status } = channel;

        users[name].language = language;
        users[name].game = game;
        users[name].viewers = viewers;
        users[name].status = status;
        users[name].active = true;
      } else users[name].active = false;
    }

    users = Object.values(users);

    this.setState({ users });

    const on = document.querySelector("#on-list");
    const off = document.querySelector("#off-list");
    const onHeight = on.offsetHeight;
    const offHeight = off.offsetHeight;

    console.log("onHeight:", onHeight);
    console.log("offHeight:", offHeight);

    on.style.maxHeight = onHeight + "px";
    off.style.maxHeight = offHeight + "px";

    this.setState({ onHeight, offHeight });
    console.log(this.state.users);
  }

  render() {
    return (
      <div id="wrapper">
        <UserList
          users={this.state.users}
          onHeight={this.state.onHeight}
          offHeight={this.state.offHeight}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
