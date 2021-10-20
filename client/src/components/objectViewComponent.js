import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

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
            <div style={{background: '#FF5353'}}>

                <div style= {{  position: 'absolute',
                                width: '244px',
                                height: '69px',
                                left: '18px',
                                top: '28px',
                                background: '#C4C4C4',
                                border: '2px',
                                boxSizing: 'border-box',
                                borderRadius: '15px'}}>Return Home</div>

                <div style= {{ background: "gray",
                                position: 'absolute',
                                width: '1361px',
                                height: '610px',
                                left: '279px',
                                top: '8px',
                                border: '4px',
                                borderRadius: '25px',
                                boxSizing: 'border-box'
                                }}></div>
            </div>
        )
    }
}