import React from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';



class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    responseFacebook = (response) => {
        console.log(response);


        axios.post("api/facebook/", { 'access_token': response.accessToken })
            .then(response => {
                localStorage.setItem('token', response.data.key)
                localStorage.setItem('IsAuthenticated', true);
                this.props.history.push('/dashboard')
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="limiter">
                <div className="container-table100">
                    <div>
                        <FacebookLogin
                            appId="817520202314696"
                            callback={this.responseFacebook}
                            icon="fa-facebook" />

                    </div>
                </div>
            </div>

        )
    }
}

export default Login;