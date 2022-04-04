import React, { useState } from 'react';
import useTshirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const [tshirts, setTshirts] = useTshirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exist = cart.find(tShirt => tShirt._id === selectedItem._id)
        if (!exist) {
            const newCart = [...cart, selectedItem];
            setCart(newCart)
        }
        else {
            alert('Item already added')
        }

    }

    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id)
        setCart(rest);
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tShirt => <Tshirt
                        key={tshirts._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>

            <div className="cart-container">
                <Cart handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;