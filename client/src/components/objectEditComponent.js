import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios' ;


export default class EditObject extends Component {

    constructor(props){

        super(props);
    
        this.state = {
            objectText : " ",
            objectColor : " ",
            objectSize : " "
        }

        this.onChangeColor = this.onChangeColor.bind(this)
        this.onChangeSize = this.onChangeSize.bind(this)
        this.onChangeText = this.onChangeText.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

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

    onChangeText(e){
        this.setState({
            objectText: e.target.value
        });
    }

    onChangeSize(e){
        this.setState({
            objectSize: e.target.value
        });
    }

    onChangeColor(e){
        this.setState({
            objectColor: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log("form submitted")
        // eslint-disable-next-line no-template-curly-in-string
        console.log('Text: ${this.state.objectText}')
        console.log('Color: ${this.state.objectColor}')
        
        const newObject = {
            objectText: this.state.objectText,
            objectColor: this.state.objectColor,
            objectSize: this.state.objectSize,
        };

        axios.post('/objects/update/'+this.props.match.params.id, newObject)
            .then(res => console.log(res.data));

        this.props.history.push('/');
        window.location.reload(false)
    }

    render() {
        return(
            <div style={{marginTop: 10,
                textAlign: "center"}}>
                <h2>Edit Object</h2>
                <div style={{color: this.state.objectColor,
                            textAlign: "center",
                            fontSize: this.state.objectSize + "px"}}>{this.state.objectText}</div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Text: </label>
                        <input type="text" className="form-control" value={this.state.objectText} onChange={this.onChangeText} ></input>
                    </div>
                    <div className="form-group">
                        <label>Color: </label>
                        <input type="color" className="form-control" value={this.state.objectColor} onChange={this.onChangeColor} ></input>
                
                    </div>
                    <div className="form-group">
                        <label>Font Size: </label>
                        <input type="number" className="form-control" value={this.state.objectSize} min="10" max="72" onChange={this.onChangeSize}></input>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save and Exit" className="btn btn-primary"></input>
                        <Link to="/" className="btn btn-danger">Cancel</Link>
                    </div>
                </form>
         </div>
        )
    }
}