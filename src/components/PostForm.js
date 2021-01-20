import React, { Component } from 'react'
import axios from 'axios'


class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            about: null,
            emails: [],
            phone: null,
            website: null,
            form_error: ""

        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    emailchangeHandler = e => {
        let tempArr = []
        tempArr.push(e.target.value)
        this.setState({ emails: tempArr })
        console.log(this.state.emails)
    }
    submitHandler = e => {
        e.preventDefault();
        const header = {
            'Authorization': `Token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
        axios.post("api/update-social-handles/", this.state, { headers: header })
            .then(response => {
                this.props.history.push('/dashboard')
                this.setState({ model: response.data.key })
            })
            .catch(error => {
                this.setState({ form_error: error.response.data })
            })
    }
    render() {
        return (

            <div className="limiter">
                <div className="container-table100">
                    <div className="wrap-table100">
                        <div className="form-style-5">
                            <div className="contact1">
                                <div className="container-contact1">

                                    <form noValidate className="contact1-form validate-form" onSubmit={this.submitHandler}>
                                        <span className="contact1-form-title">
                                        <a target="_blank" className="facebook-page mr-center" href="https://www.facebook.com/sagheersocialadmin/">Socialdashboard</a>

                                        </span>
                                        <span className="contact1-form-title">
                                            Update FaceBook Page Info
				</span>

                                        <div className="wrap-input1 validate-input">
                                            <input className="input1" type="text" name="about" placeholder="About Page" onChange={this.changeHandler} />
                                            <span className="shadow-input1"></span>
                                        </div>

                                        <div className="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                            <input autoComplete="none" className="input1" type="email" name="emails" placeholder="Email" onChange={this.emailchangeHandler} />
                                            <span className="shadow-input1"></span>
                                        </div>

                                        <div className="wrap-input1 validate-input" data-validate="Subject is required">
                                            <input className="input1" type="number" name="phone" placeholder="Contact info" onChange={this.changeHandler} />
                                            <span className="shadow-input1"></span>
                                        </div>

                                        <div className="wrap-input1 validate-input" data-validate="Message is required">
                                            <input className="input1" name="website" placeholder="Website" onChange={this.changeHandler} />
                                            <span className="shadow-input1"></span>
                                        </div>

                                        <div className="container-contact1-form-btn">
                                            <button type="submit" className="contact1-form-btn">
                                                <span>
                                                    Update
							<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                                </span>
                                            </button>
                                        </div>
                                        <div className="text-danger">
                                            {
                                                Object.entries(this.state.form_error).map(([key, message], i) => {
                                                    return (message)
                                                })
                                            }
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default PostForm