import React from "react";

class RestControllerPut extends React.Component {

    constructor(props) {
        super(props);
        this.state={users:[]};
    }
       
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'PUT',
        body:JSON.stringify({
            id:1,
            title:'foo',
            body:'bar',
            userId:1
        }),
        headers:{
            "content-type":"application/json;charset=UTF-8"
        }
    }).then(response =>{
        return response.json()
    }).then (json =>{
        console.log(json)
        this.setState({
            user:json
        });
    })
}
    render() {
        return (
            <div>
            <p><b>New Resource created  in the server as show below</b></p>
            <p>Id:{this.state.userid}</p>
            <p>Tilte:{this.state.user.title}</p>
            <p>Body:{this.state.user.body}</p>
            <p>UserId:{this.state.user.UserId}</p>
        </div>
        )
        }
    }
    export default RestControllerPut;