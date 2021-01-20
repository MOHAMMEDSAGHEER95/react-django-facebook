
import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import axios from 'axios'


class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dash: null,
      logout: null,
      login: <Nav.Link href="/login">Login</Nav.Link>
    }
  }
  componentDidMount() {
    const header = { 'Authorization': `Token ${localStorage.getItem('token')}` }
    axios.get("rest-auth/user/", { headers: header })
      .then(response => {
        this.setState({ dash: <Nav.Link href="/dashboard" >Dashboard</Nav.Link> })
        this.setState({ login: null })
        this.setState({ logout: <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link> })
      })
      .catch(error => {
        this.setState({ dash: null })
        this.setState({ logout: null })
        this.setState({ login: <Nav.Link href="/login">Login</Nav.Link> })
      })

  }
  handleLogout = e => {
    const header = { 'Authorization': `Token ${localStorage.getItem('token')}` }
    axios.post("rest-auth/logout/", {}, { headers: header })
      .then(response => {
        localStorage.setItem('IsAuthenticated', false)
        localStorage.setItem('token', null)
        this.setState({ dash: null })
        this.setState({ logout: null })
        this.setState({ login: <Nav.Link href="/login">Login</Nav.Link> })
      })
      .catch(error => {

      })
  }
  render() {
    return (
      <div>
        <Navbar className="color-nav">
          <Navbar.Brand href="/">SocialDashboard</Navbar.Brand>
          <Nav className="ml-auto">
            {this.state.dash}
            {this.state.logout}
            {this.state.login}
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;