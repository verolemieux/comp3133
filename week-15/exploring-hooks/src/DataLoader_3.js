import React from "react";
import useFetch from "./UseFetch";

export default function DataLoader3(props) {
    const data = useFetch("http://localhost:3001/links/");
    
    return (
        <div>
            <ul>
                {data.map(el => (
                    <li key={el.id}>{el.title}</li>
                ))}
            </ul>
        </div>
    );
}