import React from "react";
import { useParams } from 'react-router-dom';

const Dog = () => {
    // grab the dogName(as parameter) from url(url parameter)
    const params = useParams();
    console.log(params);

    // the dogName must be a variable in App.js file
    // destructure it from url with useParams
    const { dogName } = useParams();
    console.log(dogName);
    
    return (
        <div>
            <p>Web development is hard!!!</p>
        </div>
    )
}

export default Dog;