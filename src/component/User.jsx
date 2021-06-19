import React, { Component } from "react";
import defaultlogo from "./user.svg";

class User extends Component {
  componentDidMount() {
    const id = this.props.user.id;
    const name = document.querySelector("#name-" + id);
    const description = document.querySelector("#description-" + id);

    if (name.scrollWidth !== name.offsetWidth)
      name.className = name.className + " overflow-description";
    if (description.scrollWidth !== description.offsetWidth)
      description.className = description.className + " overflow-description";
  }

  handleHover = (e) => {
    const { display_name, created_at, bio } = this.props.user;
    const tooltip = document.querySelector("#tooltip");

    tooltip.style.opacity = 1;
    tooltip.style.top = e.target.offsetTop + "px";
    tooltip.innerHTML = `
			<h3>${display_name}</h3>
			<p>Since ${created_at}</p>
			<p>${bio}</p>`;
  };

  handleHoverOut = () => {
    const tooltip = document.querySelector("#tooltip");

    tooltip.style.opacity = 0;
    tooltip.innerHTML = "";
  };

  render() {
    const { display_name, logo, link, game, viewers, status, active, id } =
      this.props.user;

    return (
      <div
        className="user"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHoverOut}
      >
        <a href={link} target="_blank" rel="noreferrer">
          <img
            src={logo}
            alt=""
            className={"user-icon" + (active ? " active" : "")}
            onError={(e) => (e.target.src = defaultlogo)}
          />
          <div className="user-description">
            <h4 id={"name-" + id}>{display_name}</h4>
            <p id={"description-" + id} className="game-description">
              {active ? game + ": " + status : "Offline"}
            </p>
            {viewers && <p>{"Viewers: " + viewers}</p>}
          </div>
        </a>
      </div>
    );
  }
}

export default User;
