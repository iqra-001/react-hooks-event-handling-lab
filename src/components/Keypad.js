import React from "react";
// Code Keypad Component Here

function Keypad (){
    function keypad(){
        console.log("Entering password...")
    }
    return (
         <input type="password" onChange={keypad}/>
    ) 
    
}

export default Keypad;