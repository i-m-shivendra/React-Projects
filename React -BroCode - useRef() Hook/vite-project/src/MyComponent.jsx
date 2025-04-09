// useState() = Re-renders the component when the state value changes

// useRef() = "use Reference" Does not cause re-renders when its value changes
//             when you want a component to "remember" some information, but
//             you don't want that information to trigger new renders.

//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations, and Transitions
//            3. Managing Timers and Intervals

// useRef return a object with a single current property initially set to the 
// initial value you provided

import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
    const inputRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    }, []);

    function handleClick() {
        inputRef.current.focus();
        buttonRef.current.style.backgroundColor = "yellow";
    }

    return (
        <div>
            <button ref={buttonRef} onClick={handleClick}>
                Click Me!
            </button>
            <input ref={inputRef} />
        </div>
    );
}

export default MyComponent;
