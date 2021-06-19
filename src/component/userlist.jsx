import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import User from "./User";

class UserList extends Component {
  toggleOnlineUsers = () => {
    const arrow = document.querySelector("#on-arrow");
    const list = document.querySelector("#on-list");

    if (list.style.maxHeight !== "0px") {
      arrow.style.transform = "rotate(-90deg)";
      list.style.maxHeight = "0px";
    } else {
      arrow.style.transform = "";
      list.style.maxHeight = this.props.onHeight + "px";
    }
  };

  toggleOfflineUsers = () => {
    const arrow = document.querySelector("#off-arrow");
    const list = document.querySelector("#off-list");

    if (list.style.maxHeight !== "0px") {
      arrow.style.transform = "rotate(-90deg)";
      list.style.maxHeight = "0px";
    } else {
      arrow.style.transform = "";
      list.style.maxHeight = this.props.offHeight + "px";
    }
  };

  render() {
    const onlineUsers = this.props.users.filter((u) => u.active);
    const offlineUsers = this.props.users.filter((u) => !u.active);

    return (
      <div className="user-list">
        <div className="online">
          <h4 className="status" onClick={this.toggleOnlineUsers}>
            <FontAwesomeIcon id="on-arrow" icon={faAngleDown} />
            ONLINE
          </h4>
          <div id="on-list" className="list">
            {onlineUsers.map((u) => (
              <User key={u.id} user={u} />
            ))}
          </div>
        </div>
        <div className="offline">
          <h4 className="status" onClick={this.toggleOfflineUsers}>
            <FontAwesomeIcon id="off-arrow" icon={faAngleDown} />
            OFFLINE
          </h4>
          <div id="off-list" className="list">
            {offlineUsers.map((u) => (
              <User key={u.id} user={u} />
            ))}
          </div>
        </div>
        <div id="tooltip"></div>
      </div>
    );
  }
}

export default UserList;
