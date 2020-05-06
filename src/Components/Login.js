import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getName, getEmail, getMobile, signIn } from '../ActionReducers/auth'

class Login extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        const { name, email, mobile } = this.props.auth
        this.props.signIn({
            user: {
                name, email, mobile
            }
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 offset-md-3">
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <input type="text" placeholder="enter name.." onChange={(event) => { this.props.getName(event) }} />
                            <br />
                            <br />
                            <input type="email" placeholder="enter email...." onChange={(event) => { this.props.getEmail(event) }} />
                            <br />
                            <br />
                            <input type="number" placeholder="enter mobile...." onChange={(event) => { this.props.getMobile(event) }} />
                            <br />
                            <br />
                            <input type="submit" />
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state)
    return state
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getName, getEmail, getMobile, signIn }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)