import PropTypes from 'prop-types';

function UserGreeting(props){

    if(props.isLoggedIn){
       return <h2 className="welcome-mesage">Welcome {props.username} </h2>
    }
    else{
        return <h2 className="login-prompt">Please log in to continue</h2>
    }
}

UserGreeting.proptypes={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps={
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting