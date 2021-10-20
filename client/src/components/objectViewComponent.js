import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'

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
            <div
    style={{
      background: "#FF5353",
      width: "1920px",
      height: "1080px",
      position: "absolute",
      left: "0px",
      top: "0px"
    }}
  >
    <Link
      style={{
        position: "absolute",
        width: "244px",
        height: "69px",
        left: "18px",
        top: "28px",
        background: "#C4C4C4",
        border: "solid",
        borderColor: "#000000",
        borderSize: "2px",
        boxSizing: "border-box",
        borderRadius: "15px"
      }}
      to={"/"}
    >
      <div
        style={{
          position: "absolute",
          width: "205px",
          height: "41px",
          left: "19px",
          top: "11px",

          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "35px",
          lineHeight: "41px",
          color: "#000000"
        }}
      >
        Return Home
      </div>
    </Link>

    <div
      style={{
        background: "gray",
        position: "absolute",
        width: "1361px",
        height: "610px",
        left: "279px",
        top: "8px",

        border: "solid",
        borderSize: "4px",
        borderRadius: "25px",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "511px",
          height: "511px",
          left: "424px",
          top: "8px",

          background: "#AAAAAA",
          border: "solid",
          boxSizing: "border-box",
          borderRadius: "50%"
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "272px",
          height: "54px",
          left: "1064px",
          top: "437px",

          background: "#FFA2A2",
          border: "solid",
          boxSizing: "border-box",
          borderRadius: "15px"
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "272px",
          height: "54px",
          left: "1064px",
          top: "519px",

          background: "#FFA2A2",
          border: "solid",
          boxSizing: "border-box",
          borderRadius: "15px"
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "288px",
          height: "68px",
          left: "534.5px",
          top: "531px",

          background: "#87CEEB",
          border: "solid",
          borderRadius: "15px"
        }}
      ></div>
    </div>

    <div
      style={{
        position: "absolute",
        width: "843px",
        height: "478px",
        left: "78px",
        top: "634px",

        background: "#87CEEB",
        boxSizing: "border-box",
        borderRadius: "25px",
        border: "solid",
        borderSize: "4px"
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "773px",
          height: "120px",
          left: "35px",
          top: "169px",

          background: "#FFA2A2",
          border: "solid",
          borderRadius: "15px"
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "773px",
          height: "120px",
          left: "35px",
          top: "321px",

          background: "#FFA2A2",
          border: "solid",
          borderRadius: "15px"
        }}
      ></div>
    </div>

    <div
      style={{
        position: "absolute",
        width: "843px",
        height: "478px",
        left: "1000px",
        top: "634px",

        background: "#87CEEB",
        boxSizing: "border-box",
        borderRadius: "25px",
        border: "solid",
        borderSize: "4px"
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "773px",
          height: "120px",
          left: "35px",
          top: "169px",

          background: "#FFA2A2",
          border: "solid",
          borderRadius: "15px"
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "773px",
          height: "120px",
          left: "35px",
          top: "321px",

          background: "#FFA2A2",
          border: "solid",
          borderRadius: "15px"
        }}
      ></div>
    </div>
  </div>
        )
    }
}