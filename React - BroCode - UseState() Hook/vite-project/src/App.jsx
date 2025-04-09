//React hook = special function that allow functional components
//            to use React features without writing class components(React v16.8)
//            (useState,useEffect,useContext,useReducer,useCallback, and more..)

//use state() = A react hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the virtual DOM
//              [name,setName]

import MyComponent from "./MyComponent";
import Counter from "./Counter";

function App() {
  
      return(
        <>
          <MyComponent/>
          <Counter/>
        </>
      );   
}

export default App
