import React, { Component } from "react";

class SocialProfile extends Component {
  render() {
    const { link, image } = this.props.profile;

    return (
      <li className="list-inline-item">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <i className={image}></i>
        </a>
      </li>
    );
  }
}

export default SocialProfile;
