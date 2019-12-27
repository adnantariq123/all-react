import React from 'react';

//https://www.youtube.com/watch?v=DNYXgtZBRPE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=33&t=0s

function Hero(props) {

    if(props.heroName ==="Joker") {
        throw new Error ('ALL COOL^-^ Not a Hero bro, not a mofo hero!')  
    }
        return (
            <li>
                    {props.heroName}
            </li>
            );
    }

 
export default Hero;