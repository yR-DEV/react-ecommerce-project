import React, { useEffect } from 'react';

const Cart = (props) => {
    
    useEffect(() => {

        // return () => props.clearState();
    }, [])

    return (
        <ul>
            {
                (props.cart !== undefined) ? (
                    <li>
                        <img src={props.cart[0].image} />
                        <p>Price: </p>
                        <p>100$</p>
                    </li>
                    // props.cart.map( date => {
                    //     <li key={date.id}>
                    //         <img src={props.cart[0].image} /> 
                    //     </li>  
                    // })
                ) : <p>Cart is Empty!</p>
            }
        </ul>
    )
}

export default Cart;