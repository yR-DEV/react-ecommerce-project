import React, { useEffect } from 'react';

const Landing = (props) => {

    useEffect(() => {
        
        props.getApi();
        let landingImage = props.locs[(Math.floor(Math.random() * props.locs.length))];
        console.log(props.locs);
        console.log(landingImage);
        // return () => props.clearState();
    }, [])


    return (
        <div>
            <h1> BUY A DATE WITH A RICK AND MORTY CHARACTER!</h1>
            <h3>All proceedes go to the interdimensional travel fund and to hopefully get season 5 done soon</h3>
            {<img src="https://rickandmortyapi.com/api/character/avatar/4.jpeg" alt="character"/>}
        </div>
    )
}

export default Landing;