import React, { useState, useEffect } from "react";

export default function DataLoader2(props) {
    const [data, setData] = useStat([]);

    useEffect(() => {
        fetch("http://localhost:3001/links")
            .then(response => response.json())
            .then(data => setData(data));
    }, []); //need to add empty array as second argument!

    // return (
    //     <div>
    //         <ul>
    //             {data.map(el => (
    //                 <li key={el.id}>{el.title}</li>
    //             ))}
    //         </ul>
    //     </div>
    // );
    // REPLACE WITH (and consume component by providing a render prop from the outside)

    return props.render(data);
}