import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
const PORT = process.env.PORT || 4000

const ObjectComp = props =>(
    <tr>
        <td>{props.object.objectText}</td>
        <td><Link to={"/view/"+props.object._id} className={"btn btn-primary"}>View Object</Link></td>
    </tr>
)

export default class ObjectList extends Component {

    constructor(props) {

        super(props);
        this.state = {objects: []};

    }

    componentDidMount(){
        axios.get('/objects/')
            .then(response => {
                this.setState({objects: response.data});
            })
            .catch(function (error){
                console.log(error);
            })
        
    }

    objectList(){
        return this.state.objects.map(function(currentObject, i){
            return <ObjectComp object={currentObject} key={i}></ObjectComp>
        })
    }

    render() {
        return(
            <div style={{marginTop: 10,
                textAlign: "center"}}>

                <h2>Object List</h2>
                <table className="table table-striped" style={{marginTop: 20}} >
                    <thead>
                        <tr>
                            <th>Object</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.objectList() }
                    </tbody>
                </table>
            </div>
        )
    }
}