import React, { Component } from "react";

export default class CreateObject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            objectText: '',
            objectSize: "12",
            objectColor: 'blue'
        }

        this.onChangeColor = this.onChangeColor.bind(this)
        this.onChangeSize = this.onChangeSize.bind(this)
        this.onChangeText = this.onChangeText.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
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

    onSubmit(e) {

        e.preventDefault();
        this.setState({
            objectText:'',
            objectSize: 12,
            objectColor:'blue'
        })

    }
    
    render() {
        return(
            <div style={{marginTop: 10}}>
                <h2>Create Object</h2>
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
                    
                    </div>
                </form>
            </div>
        )
    }
}