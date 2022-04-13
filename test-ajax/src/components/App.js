import React from "react";
import "./App.css";

export default class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            data : [],
        }
    }

    async fetchUser() {
        let user = await fetch("https://reqres.in/api/users/2")
        .then(response => response.json())
        .then(data => /*console.log(data.data)*/ this.setState({data: data.data}))
        .catch(err => console.log(err));

        //this.setState({data: await user.data});
    }

    componentDidMount() {
        this.fetchUser();
    }

    render() {
        return(
            <div>
                <h2>Hola</h2>
                <p>aqui muestro datos de una API usando fetch</p>
                <ul>
                    <li>{this.state.data.first_name}</li>
                </ul>
            </div>
        );
    }
}