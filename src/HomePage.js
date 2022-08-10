import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

// function HomePage() {
//     return (
//     <div>
//       <Message>
//         <h1>hello, here is dog finder app</h1>
//       </Message>
//       {/* Following is anti pattern, and not a react pattern */}
//       <Message>
//         <h3><Link to="/dogs/perry">Perry</Link></h3>
//         <h3><Link to="/dogs/duke">Duke</Link></h3>
//         <h3><Link to="/dogs/tubby">Tubby</Link></h3>
//         <h3><Link to="/dogs/whiskey">Whiskey</Link></h3>
//       </Message> 

//     </div >
//   );
// }

// React pattern matchinng with useParams

const defaultDogs = ["Perry", "Tubby", "Whiskey", "Duke"];

function HomePage({ dogs = defaultDogs}) {
    
    return (
    <div>
        <Message>
            <h1>hello, here is dog finder app</h1>
        </Message>
      {/* For react pattern with useParams */}
        <Message>
            <ul>
                {/* {dogs.forEach(dog => { */}
                {/* {dogs.map(dog => { */}
                {dogs.map(dog => (
                    <li key = {dog}>
                        <Link to={`/dogs/${dog}`}> Show Dog Named {dog} </Link>
                    </li>
                ))}
            </ul>
        </Message>

    </div >
  );
}

export default HomePage;
