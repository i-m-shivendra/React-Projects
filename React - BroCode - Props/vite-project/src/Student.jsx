import PropTypes from 'prop-types'
import defaultPropes from 'prop-types'

function Student(props){
    return(

      <div className="student">
        <p>Name: {props.name} </p>
        <p>Age: {props.age} </p>
        <p>Student: {props.isStudent ? "Yes" : "No"} </p>
      </div>
        
    );
}

//we have to include it from the node-modules - check there it will be present
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps={
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student