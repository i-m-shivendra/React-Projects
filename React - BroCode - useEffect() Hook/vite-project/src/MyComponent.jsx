
//useEffect() = React Hook tells that React Do SOME CODE WHEN(pick one):
//              This component re-renders
//              This component mounts
//              The state of the value

// useEffects(function,[dependencies])

// 1.useEffect() => {})             //Runs after every re-render
// 2.useEffect() => {}, [])         //Runs only on mount
// 3.useEffect() => {}, [value]     //Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, { useState, useEffect } from 'react';

function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");


    useEffect( ()=> {
        //jitni bar hum count par click karte hain ye title bhi change kar deta 
        //hai. Jaise agr count 1 hua to title me count:1
        document.title = `Count: ${count} ${color}`;  
    }, 
    //agr ye array ke andar koi bhi parameter na pass kare to ye title ka
    //count bar bar badheyaga nhi lekin humne to iske andar dl diya hai count
    // to ye bar bar title bhi update kar dega
    [count,color] 
    );

    function addCount(){
        setCount(c => c+1);
    }

    function subtractCount(){
        setCount(c => c-1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
      <>
       <p style={{color: color}}>Count: {count} </p>
       <button onClick={addCount}>Add</button>
       <button onClick={subtractCount}>Subtract</button>
       <button onClick={changeColor}>Change Color</button>
      </>
    );
}
export default MyComponent