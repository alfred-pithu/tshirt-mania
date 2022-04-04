import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle'
import Father from '../Father/Father'
import Aunty from '../Aunty/Aunty'
import './Grandpa.css'

/* 
Context API
1. Call createContext with default value
2. Set a variable of the context with upperCase
3. Make sure you export the context to use it in other places
4. Wrap your child content using RingContext.Provider
5.Provide a value
6. To consume the context from Child Component
7.useContext hook and you will need to pass the contextName

*/


export const RingContext = createContext('ring');

const Grandpa = () => {
    const [house, setHouse] = useState(1)

    const ornament = 'Matir khati Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }

    return (
        <RingContext.Provider value={[house, setHouse]} >

            <div className='grandpa' >
                <h4>Grandpa</h4>
                <p>House : {house} <button onClick={handleBuyAHouse}>Buy a House</button>
                </p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament} ></Father>
                    <Uncle house={house} ></Uncle>
                    <Aunty house={house} ></Aunty>
                </section>
            </div>

        </RingContext.Provider>
    );
};

export default Grandpa;