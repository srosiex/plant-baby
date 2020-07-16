import React from "react"
import { Link } from "react-router-dom"
import { logoutUser } from "../actions/logoutUser"
import { connect } from "react-redux"


function NavBar(props) {

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
                </li> : null}
        </div>
    )
}

const mapStateToProps = ({ usersReducer }) => {
    const { isLoggedIn, user } = usersReducer
    return {
        isLoggedIn: isLoggedIn,
        user: user
    }
}

export default connect(mapStateToProps, { logoutUser })(NavBar)