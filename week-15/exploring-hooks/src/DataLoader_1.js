import React, { Component } from "react";

export default class DataLoader extends Component {
    state = { data: [] };

    componentDidMount() {
        fetch("http://localhost:3001/links/")
            .then(response => response.json())
            .then(data => 
                this.setState(() => {
                    return { data };
                })
            );
    }
    
    render() {
        // return (
        //     <div>
        //         <ul>
        //             {this.state.data.map(el => (
        //                 <li key={el.id}>{el.title}</li>
        //             ))}
        //         </ul>
        //     </div>
        // );
        // REPLACE WITH (and consume component by providing a render prop from the outside)
        return this.props.render(this.state.data);
    }
}