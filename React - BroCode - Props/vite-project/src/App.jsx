//props = read only properties that are shared between components.
//        A parent component can send data to a child component
//        <Component key=value />

//propTypes = A mechanism that ensures that the passed value is of the 
//            correct datatype
//            age:ProtoTypes.number

//defaultProps = default Values for props in case they are not passed from \
//               the parent component
//               name: "Guest"

import Student from "./Student";

function App() {
     return(
      <>
         <Student name="Aayush" age={30} isStudent={true}/>
         <Student name="Bobby" age={42} isStudent={false}/>
         <Student name="Chaitanya" age={50} isStudent={false}/>
         <Student name="Devdatt" age={22} isStudent={true}/>
         <Student/>

      </>
     );
}

export default App
