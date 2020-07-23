import React from "react"
import { Link } from "react-router-dom"
import { logoutUser } from "../actions/logoutUser"
import { connect } from "react-redux"


function NavBar(props) {
console.log(props)
    const handleClick = () => {
        const { logoutUser, isLoggedIn, user } = props
        if (isLoggedIn) {
            logoutUser(user.id)
        }
    }

    return (
        <div className="nav_bar">
            {props.isLoggedIn ?
                <li>
                    <Link to="/login" onClick={(e) => handleClick(e)} className="logout">
                        Logout
                    </Link>
                </li> : 
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