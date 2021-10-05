import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Object = props =>(
    <tr>
        <td>{props.object.objectText}</td>
        <td><Link to={"/edit/"+props.object._id}>Edit</Link></td>
    </tr>
)

export default class ObjectList extends Component {

    constructor(props) {

        super(props);
        this.state = {objects: []};

    }

    componentDidMount(){
        axios.get('http://localhost:4000/objects/')
            .then(response => {
                this.setState({objects: response.data});
            })
            .catch(function (error){
                console.log(error);
            })
    }

    objectList(){
        return this.state.objects.map(function(currentObject, i){
            return <Object object={currentObject} key={}></Object>
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