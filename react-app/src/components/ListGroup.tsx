
import { MouseEvent, useState } from "react";
//import { Fragment } from "react";
function ListGroup() {
    let items = [
        "New York",
        "San Francisco",
        "Tokyo",
        "London",
        "Paris"
    ];
    //let selectedIndex = 0;
    const [selectedIndex, setSelectedIndex] = useState(0);
     


    //Event Handler
    const handleClick = (event: MouseEvent) => console.log(event);
    //NOTE:
    //only html elements
    //and react components can be used inside here
    //the only exception is braces, wirh braces we can render
    //anything dynamically

    return (
        //add a fragment
        <>   
        <h1>List</h1>
        {items.length === 0 && <p>No items Found</p>}
         <ul className="list-group">
       
       {items.map((item, index) => (
            <li 
            className={selectedIndex === index ? 'list-group-item active': 'list-group-item' } 
            key={item}
            onClick={() => {setSelectedIndex(index); }}
             >
                {item}</li>
        ))}

    </ul>
    </>

    )
}

//export
export default ListGroup;