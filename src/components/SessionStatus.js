import React, { Component } from "react"
import { connect } from "react-redux"
import { sessionStatus } from "../actions/sessionStatus"

class SessionStatus extends Component {

    componentDidMount() {
        this.props.sessionStatus()
    }

    render() {
        return (
            <div>
                Welcome!
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log('state:',state)
    // const {isLoggedIn, user} = state.usersReducer
    return {
        isLoggedIn: state.isLoggedIn,
        user: state.user
    }
}

export default connect(mapStateToProps, { sessionStatus })(SessionStatus)