import React, { useState } from 'react'

function MyComponent(){

    const [car,setCar] = useState({year: 2024, make: "Ford", model: "Mustang"})

    function handleYearChange(event){
        //yha par spread operator ka use kiya hai
        //Nhi to year update karte waqt baki dono properties gayab 
        //ho jayengi i.e.make and model
        //yha par hum car ki jgh c matlab uske first letter ka use kar skte h
        setCar( car => ({...car, year: event.target.value}));
    }

    function handleMakeChange(event){
        //yha c matlab previous state ko represent kar rha hai
        setCar( c => ({...c, make: event.target.value}));
    }

    function handleModelChange(event){
        //Curley {} braces matlab hum JS ka code likh rhe hain
        //aur {} ke andar bhi kuch ho to matlab JS ke objects
        setCar( c => ({...c, model: event.target.value}));
    }


    return(
       <>
        <div>

        <p>Your favourite car is: {car.year} {car.make} {car.model} </p>

        <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
        <input type="text" value={car.model} onChange={handleModelChange}/><br/>

        </div>
       </>
    );

    
}
export default MyComponent