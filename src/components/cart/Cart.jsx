import React, { useEffect } from 'react';

const Cart = (props) => {
    
    useEffect(() => {
        
        props.getApi('todos');
        console.log(props.cart);
        return () => props.clearState();
    }, [])

    return (
        <div>
            cart
        </div>
    )
}

export default Cart;