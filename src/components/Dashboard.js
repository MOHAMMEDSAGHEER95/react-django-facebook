import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router'

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            social_details: [],
        }
    }

    componentDidMount() {

        const header = { 'Authorization': `Token ${localStorage.getItem('token')}` }
        axios.get("api/social-handles/", { headers: header })
            .then(response => {
                this.setState({ social_details: response.data.message })
                console.log(response.data)
            })
            .catch(error => {
            })
    }

    render() {
        const { social_details } = this.state
        return (
            <div>
                <div className="limiter">
                    <div className="container-table100">
                        <div className="wrap-table100">
                            <div className="table">

                                <div className="row header">
                                    <div className="cell">
                                        Page Name
							</div>
                                    <div className="cell">
                                        Contact
							</div>
                                    <div className="cell">
                                        About
							</div>
                                    <div className="cell">
                                        Emails
							</div>
                                    <div className="cell">
                                        Website
							</div>
                                    <div className="cell">
                                        Action
							</div>
                                </div>
                                {
                                    social_details.map((itm, k) => {
                                        return (
                                            <div className="row" key={itm.id}>
                                                <div className="cell">
                                                <a className="fb-page-link" target="_blank" href="https://www.facebook.com/sagheersocialadmin/">{itm.name}</a>
                                                </div>
                                                <div className="cell">
                                                    {itm.phone}
                                                </div>
                                                <div className="cell">
                                                    {itm.about}
                                                </div>
                                                <div className="cell">
                                                    {itm.emails}
                                                </div>
                                                <div className="cell">
                                                    {itm.website}
                                                </div>
                                                <div className="cell" data-title="Location">
                                                    <a className="btn btn-primary" href="/update-fb-page">Update</a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                <div className="row">
                                    <div className="cell">
                                        Vincent Williamson
							</div>
                                    <div className="cell">
                                        31
							</div>
                                    <div className="cell">
                                        iOS Developer
							</div>
                                    <div className="cell">
                                        Washington
							</div>
                                    <div className="cell">
                                        www.google.com
							</div>
                                    <div className="cell">
                                        Invalid
							</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}

export default Dashboard;