import React from'react';

class RestController extends React.Component{
    constructor(props) {
        super(props);
        this.state={user:[]};
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typeicode.com/posts',{
            methid:'POST',
            body:JSON.stringify({
                title:'New title addes',
                body:'New body added.hello body.',
                userId:2
            }),
            headers:{
                "content-type":"application/json;charset=UTF-8"
            }
        }).then(response =>{
            return response.json()
        }) .then (json => {
            this.setState({
                user:json
            });
        });
    }
    render (){
        return(
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
export default RestController;