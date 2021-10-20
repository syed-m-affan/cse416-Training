import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'

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
                <Container>

                    <Row>

                        <Link to={'/home'}>Home</Link>

                    </Row>
                    <Row>
                        <Stack direction="horizontal" gap={3}>
                            <div style={{background: '#87CEEB',
                                        borderRadius: '25px'}}>
                                <Stack gap={2}>
                                    <div>
                                        <Stack direction="horizontal" gap={3}>
                                            <div style={{background: '#FFA2A2',
                                                        borderRadius: '15px',
                                                        }}>Your Platforms</div>
                                            <div style={{background: '#FFA2A2',
                                                        borderRadius: '15px',
                                                        }}>Create New Platform</div>
                                        </Stack>
                                    </div>
                                    <div style={{background: '#FFA2A2',
                                                        borderRadius: '15px',
                                                        }}>
                                        Baseball101
                                    </div>
                                    <div style={{background: '#FFA2A2',
                                                        borderRadius: '15px',
                                                        }}>
                                        Racecar Fans
                                    </div>
                                </Stack>

                            </div>
                            <div style={{background: '#87CEEB',
                                        borderRadius: '25px'}}>
                                <Stack gap={2}>
                                    <div style={{background: '#FFA2A2',
                                                        borderRadius: '15px',
                                                        }}>
                                        Recently
                                        
                                    </div>
                                    <div style={{background: '#FFA2A2',
                                                        borderRadius: '15px',
                                                        }}>
                                        Baseball101
                                    </div>
                                    <div style={{background: '#FFA2A2',
                                                        borderRadius: '15px',
                                                        }}>
                                        Racecar Fan
                                    </div>
                                </Stack>

                            </div>
                        </Stack>
                    </Row>
                </Container>
            </div>
        )
    }
}