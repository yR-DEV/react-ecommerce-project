import React, { useEffect } from 'react';

const Landing = (props) => {

    useEffect(() => {
        
        props.getApi('todos');
        let landingImage = props.locs[(Math.floor(Math.random() * props.locs.length))];
        console.log(props.locs);
        console.log(landingImage);
        // return () => props.clearState();
    }, [])


    return (
        <div>
            {<img src="https://rickandmortyapi.com/api/character/avatar/4.jpeg" alt="character"/>}
        </div>
    )
}

export default Landing;