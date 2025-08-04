import React, { Component } from 'react';
import './Getuser.css';

class Getuser extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();
      this.setState({ user: data.results[0] });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  render() {
    const { user } = this.state;

    return (
      <div className="user-container">
        <h2>Random User Info</h2>
        {user ? (
          <div className="user-card">
            <img src={user.picture.large} alt="User" />
            <p>{user.name.title}. {user.name.first}</p>
          </div>
        ) : (
          <>
            <div className="loader"></div>
            <p className="loading-text">Fetching a cool random user...</p>
          </>
        )}
      </div>
    );
  }
}

export default Getuser;
