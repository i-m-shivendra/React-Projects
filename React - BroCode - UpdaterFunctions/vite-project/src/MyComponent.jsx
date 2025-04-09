
import React, {useState} from 'react'

function MyComponet(){
 
    const[count,setCount] = useState(0);

    function increment(){
        //Uses the CURRENT state to calculate the NEXT state
        //set functions do not trigger an update
        //React batches together state updates for performance reasons
        //NEXT state becomes the CURRENT state after an update

        // setCount(count+1);  //0+1
        // setCount(count+1);  //0+1
        // setCount(count+1);  //0+1
        // React me ye chiz kam nhi karti isme jab hum 3 bar press karenge tab
        // count start hoga aur har bar increment sirf 1 ka hi karega

        //isliye fir hum arrow function aur 1 new method ka use karte hain

        //Takes the PENDING state to calculate NEXT state
        //React puts your updater function in a queue (waiting in line)
        //During the next render, it will call them in the same order

        //ab ye 1 bar click karne par hi start ho jayega
        //aur start hone ke bad har single click par 3 increment karega
        setCount(c=>c+1);
        setCount(c=>c+1);
        setCount(c=>c+1);


    }

    function decrement(){
        setCount(c=>c-1);
        setCount(c=>c-1);
        setCount(c=>c-1);
    }

    function reset(){
        setCount(0);
    }

    return(
        <div>
            <p>Count: {count} </p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
export default MyComponet