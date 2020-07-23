import React from "react"
import { Link } from "react-router-dom"
import { logoutUser } from "../actions/logoutUser"
import { connect } from "react-redux"

//test@test.com pword test

function NavBar(props) {
console.log(props)
    const handleClick = () => {
        const { logoutUser, isLoggedIn, user } = props
        if (isLoggedIn) {
            logoutUser(user.id)
        }
    }

    const loggedInLinks = () => {
        return <ul>
            <li>
                <Link to="/home" onClick={(e) => handleClick(e)} className="home">
                    Home
                </Link>
            </li>
            <li>
            <Link to="/login" onClick={(e) => handleClick(e)} className="logout">
                    Logout
                </Link>
 
            </li>
        </ul>
    }

    return (
        <div className="nav_bar">
            {props.isLoggedIn ?
loggedInLinks() : 
                <li><Link to="/login" >Login</Link></li>}
        </div>
    )
}

const mapStateToProps = (state) => {
    // const { isLoggedIn, user } = usersReducer
    return {
        isLoggedIn: state.isLoggedIn,
        user: state.user
    }
}

export default connect(mapStateToProps, { logoutUser })(NavBar)