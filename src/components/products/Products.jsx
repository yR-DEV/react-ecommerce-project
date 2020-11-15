import React, { useEffect } from 'react';

const Products = (props) => {

    useEffect(() => {
        
        props.getApi('todos');
        console.log(props.people);
        return () => props.clearState();
    }, [])

    return (
        <ul>
            {props.people.map(person => {
                return (
                    <li>hello</li>
                )
            })}
        </ul>
    )
}

export default Products;