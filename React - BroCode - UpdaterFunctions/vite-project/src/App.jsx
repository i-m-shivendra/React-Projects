
//updater function = A function passed as an argument to setState() usually
//                  ex. setYear(year+1)           (this is also fine)
//                  ex. setYear(arrow function)   (but we should use this)
//                  Allow for safeUpdates based on the previous state 
//                  Used with multiple state updates and asynchronous functions
//                  Good Practices to use updater functions

import MyComponet from "./MyComponent"

function App() {
    return(
      <>
        <MyComponet/>
      </>
    );
}

export default App
