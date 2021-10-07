import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class ViewObject extends Component {

    constructor(props){

        super(props);
    
        this.state = {
            objectText : " ",
            objectColor : " ",
            objectSize : " ",
        }

        this.onDelete = this.onDelete.bind(this);

    }

    componentDidMount(){
    
        axios.get('/objects/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    objectText : response.data.objectText,
                    objectColor : response.data.objectColor,
                    objectSize : response.data.objectSize
                })
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onDelete(){

        axios.delete('/objects/delete/' + this.props.match.params.id)
            .then(response => {
                console.log('deleted')
            })
            .catch(error => {
                console.log(error)
            })
        
         this.props.history.push('/');
         window.location.reload(false)
    }

    render() {
        return(
            <div style={{marginTop: 10,
                textAlign: "center"}}>
                <h2>View Object</h2>
                <div style={{color: this.state.objectColor,
                            textAlign: "center",
                            fontSize: this.state.objectSize + "px"}}>{this.state.objectText}</div>
                <Link to={"/edit/"+this.props.match.params.id} className="btn btn-primary">Edit</Link>
                <Link to={"/"} className="btn btn-warning">Exit</Link>
                <button className="btn btn-danger" onClick={this.onDelete}>Delete Object</button>
            </div>
            
        )
    }
}