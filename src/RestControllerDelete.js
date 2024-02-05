import React from "react";

class RestControllerDelete extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1',{
            method: 'DELETE'
        });
    }
    render() {
        return (
            <div>
                <p><b>Resource detele in the server</b></p>
            </div>
        )
    }
}
export default RestControllerDelete