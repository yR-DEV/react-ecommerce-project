import React, { useEffect } from 'react';

const Products = (props) => {

    useEffect(() => {
        props.getApi();
        return () => props.clearState();
    }, [])

    // Handle adding to cart function to pass back through props and add person to cart
    const handleAddToCart = (person) => {
        props.addToCart(person);
        // console.log(person);
    }

    // Handle submit function to change the style after added to cart
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(event.target[0]);
    //     // event.target.style="hidden";
    //     // console.log(event.target[0]);
    // }



    return (
        <ul>
            {(props.people !== undefined) ? props.people.map(person => {
                return (
                    // <form key={person.id} onSubmit={handleSubmit}>
                        <li key={person.id}>
                            <h2>Buy Charity S5 Funding Date with: {person.name}</h2>
                            <img src={person.image} />
                            <div>
                                <button onClick={() => handleAddToCart(person)}>Add Date To Cart!</button>
                            </div>
                        </li>
                    // </form>

                )
            }) : props.getApi()}
        </ul>
    )
}

export default Products;